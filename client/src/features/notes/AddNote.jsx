import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddNote = () => {
	const [title, setTitle] = useState('');
	const addNote = async () => {};

	return (
		<div>
			<Link to="/" className="back-button">
				👈 Back
			</Link>
			<form onSubmit={addNote}>
				<div className="single-note">
					<div>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Enter Title here..."
							className="title"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddNote;
