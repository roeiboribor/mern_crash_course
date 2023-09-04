import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const List = (data) => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		const newData = data.data.map((item) => item);
		setNotes(newData);
	}, []);

	return (
		<ul className="notes">
			<li className="add-note-button">
				<Link to={`/add-note`}>+</Link>
			</li>
			{notes.map((item) => (
				<li key={item._id}>
					<Link to={`/note/${item._id}`}>
						<h3>{item.title}</h3>
						<p>
							{item.description.length > 50
								? `${item.description.substring(0, 50)}...`
								: item.description}
						</p>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default List;
