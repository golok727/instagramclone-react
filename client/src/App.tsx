import React from "react";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-black text-white relative">
			{/* Radhey Shyam */}
			<Navbar />
			<MainContent />
		</div>
	);
};
export default App;
