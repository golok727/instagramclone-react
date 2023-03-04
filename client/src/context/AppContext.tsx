import React, { createContext } from "react";

import { createRandomPost, createRandomUser, User, Post } from "../faker";

const users = Array.from(Array(20)).map(createRandomUser);
const posts = Array.from(Array(10)).map(createRandomPost);

type InitialState = {
	users: User[];
	posts: Post[];
};

const initialState = {
	users,
	posts,
};

export const AppContext = createContext<InitialState>(initialState);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<AppContext.Provider value={initialState}>{children}</AppContext.Provider>
	);
};
