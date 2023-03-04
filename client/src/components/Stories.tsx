import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

const Stories: React.FC = () => {
	const { users } = useContext(AppContext);

	return <div className="">Stories</div>;
};

export default Stories;
