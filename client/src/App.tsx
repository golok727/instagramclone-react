import React from "react";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
import ErrorPage from "./components/ErrorPage";
import Messages from "./pages/messages";
import Explore from "./pages/explore";
import Reels from "./pages/reels";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Main>
				<SidebarProvider>
					<Navbar />
				</SidebarProvider>
			</Main>
		),

		children: [
			{
				path: "/",
				element: <MainContent />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/direct",
				element: <Messages />,
			},

			{
				path: "/reels",
				element: <Reels />,
			},

			{
				path: "/explore",
				element: <Explore />,
			},
		],
		errorElement: <ErrorPage />,
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
