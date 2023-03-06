import React from "react";
import { Outlet } from "react-router-dom";
type Props = {
	children: React.ReactNode;
};
const Main: React.FC<Props> = ({ children }) => {
	return (
		<>
			{children}
			<Outlet />
		</>
	);
};
export default Main;
