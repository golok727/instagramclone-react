import React, { createContext } from "react";

import { User, createRandomUser } from "../faker";

interface AuthContextType {
	user: User;
	isLoggedIn: boolean;
	isLoading: boolean;
}

const initialState: AuthContextType = {
	user: createRandomUser(),
	isLoggedIn: true,
	isLoading: false,
};

export const AuthContext = createContext<AuthContextType>(initialState);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<AuthContext.Provider value={initialState}>{children}</AuthContext.Provider>
	);
};
