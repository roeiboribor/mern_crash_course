import { useEffect, useState } from 'react';
import Loader from './Loader';
import Error from './Error';
import List from './List';
import { Link } from 'react-router-dom';

const index = () => {
	const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes`;

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getAllNotes = async () => {
			try {
				const response = await fetch(baseUrl);

				if (!response.ok) {
					throw new Error('Failed to fetch data.');
				}

				const notes = await response.json();
				setData(notes);
				setIsLoading(false);
			} catch (error) {
				setError('Error fetching data. Please try again later');
				setIsLoading(false);
			}
		};

		getAllNotes();
	}, []);

	return (
		<>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
			<div className="flex justify-between align-center">
				<h2>Notes</h2>
			</div>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Error error={error} />
			) : (
				<List data={data} />
			)}
		</>
	);
};

export default index;
