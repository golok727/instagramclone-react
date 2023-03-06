import React, { useState, createContext, useEffect, useCallback } from "react";

type StateDispatch = React.Dispatch<React.SetStateAction<boolean>>;
type SContext = {
	searchOpen: boolean;
	notificationsOpen: boolean;
	createOpen: boolean;
	moreMenuOpen: boolean;
	sidebarOpen: boolean;
	setSearchOpen: StateDispatch;
	setNotificationOpen: StateDispatch;
	setCreateOpen: StateDispatch;
	setMoreMenuOpen: StateDispatch;
	reset: () => void;
};

// const initialState: SContext = {
// 	searchOpen: false,
// 	createOpen: false,
// 	moreMenuOpen: false,
// 	notificationsOpen: false,
// };

export const SidebarContext = createContext<SContext>(null!);

export const SidebarProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [searchOpen, setSearchOpen] = useState(false);
	const [notificationsOpen, setNotificationOpen] = useState(false);
	const [createOpen, setCreateOpen] = useState(false);
	const [moreMenuOpen, setMoreMenuOpen] = useState(false);
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const reset = useCallback(() => {
		setSearchOpen(false);
		setNotificationOpen(false);
		setMoreMenuOpen(false);
		setCreateOpen(false);
		// setSidebarOpen(false);
	}, [
		setSearchOpen,
		setNotificationOpen,
		setCreateOpen,
		setMoreMenuOpen,
		setSidebarOpen,
	]);

	useEffect(() => {
		if (searchOpen || notificationsOpen) setSidebarOpen(true);
		else {
			setSidebarOpen(false);
		}
	}, [searchOpen, notificationsOpen, setSearchOpen, setNotificationOpen]);

	return (
		<SidebarContext.Provider
			value={{
				reset,
				sidebarOpen,
				searchOpen,
				notificationsOpen,
				createOpen,
				moreMenuOpen,
				setSearchOpen,
				setCreateOpen,
				setMoreMenuOpen,
				setNotificationOpen,
			}}
		>
			{children}
		</SidebarContext.Provider>
	);
};
