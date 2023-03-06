import React, { useState, createContext } from "react";

type StateDispatch = React.Dispatch<React.SetStateAction<boolean>>;
type SContext = {
	searchOpen: boolean;
	notificationsOpen: boolean;
	createOpen: boolean;
	moreMenuOpen: boolean;
	setSearchOpen: StateDispatch;
	setNotificationOpen: StateDispatch;
	setCreateOpen: StateDispatch;
	setMoreMenuOpen: StateDispatch;
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

	return (
		<SidebarContext.Provider
			value={{
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
