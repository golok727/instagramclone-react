import React from "react";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainContent />,
		errorElement: <ErrorPage />,
	},
]);

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-black text-white relative">
			{/* Radhey Shyam */}
			<Navbar />

			{/* <MainContent /> */}
			<RouterProvider router={router} />
		</div>
	);
};
export default App;
