import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terms from "./pages/terms/Terms";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./pages/header/Header";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Terms />} />
				<Route path='/terms' element={<Terms />} />
				<Route path='/dashboard/pricelist' element={<Dashboard />} />
			</Routes>
		</Router>
	);
}

export default App;

export const baseUrl = "https://lettfaktura.onrender.com/api";
