import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//----------- START COMPONENTS
import About from './routes/About/About';
import Home from './Home/home';
//----------- END COMPONENTS

function App() {
	return (
		<>
			<Router>
				Header
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
				Footer
			</Router>
		</>
	);
}

export default App;
