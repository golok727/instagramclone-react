import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Messages: React.FC = () => {
	const { user } = useContext(AuthContext);

	return (
		<div className="min-h-screen flex justify-center items-center overflow-hidden lg:pl-70">
			<div className="flex min-h-[500px] border-gray-600 border-[1px] rounded">
				<div className="">
					<header className="py-5 px-10 flex font-bold text-xs justify-center items-center border-b-[1px] border-r-[1px] border-gray-600">
						{user.username}
					</header>
				</div>
				<div className="flex-1 lg:min-w-[300px]">Message</div>
			</div>
		</div>
	);
};

export default Messages;
