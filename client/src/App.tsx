import React from "react";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Main>
				<Navbar />
			</Main>
		),

		children: [
			{
				path: "/",
				element: <MainContent />,
			},
		],
		errorElement: (
			<Main>
				<Navbar />
				<ErrorPage />
			</Main>
		),
	},
]);

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-black text-white relative">
			{/* Radhey Shyam */}

			{/* <MainContent /> */}
			<RouterProvider router={router} />
		</div>
	);
};
export default App;
