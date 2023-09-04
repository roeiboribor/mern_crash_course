import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 🚩🚩🚩 START LAYOUT COMPONENTS

import Header from './layouts/Header';
import Footer from './layouts/Footer';

// 🏁🏁🏁 END LAYOUT COMPONENTS

// 🚩🚩🚩 START COMPONENTS

import Home from './pages/Home';
import About from './pages/About';
import AddNote from './features/notes/AddNote';

// 🏁🏁🏁 END COMPONENTS

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/add-note" element={<AddNote />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
