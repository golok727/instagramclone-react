import React, { createContext } from "react";

import { createRandomUser, User } from "../faker";

const users = Array.from(Array(10)).map(createRandomUser);

type InitialState = {
	users: User[];
};

const initialState = {
	users,
};

export const AppContext = createContext<InitialState>(initialState);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<AppContext.Provider value={initialState}>{children}</AppContext.Provider>
	);
};
