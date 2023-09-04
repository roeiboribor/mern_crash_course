import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//----------- START COMPONENTS
import Home from './pages/Home/home';
import About from './pages/About/about';
import Header from './components/Header';
import Footer from './components/Footer';
//----------- END COMPONENTS

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
