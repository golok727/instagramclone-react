import React, { useContext } from "react";

import { SidebarContext } from "../context/SidebarContext";

export const SlidingSidebar: React.FC = () => {
	const { searchOpen, notificationsOpen } = useContext(SidebarContext);

	return <div>Sidebar</div>;
};
