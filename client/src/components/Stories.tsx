import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

const Stories: React.FC = () => {
	const { users } = useContext(AppContext);

	return (
		<div className="flex overflow-x-auto select-none gap-3 no-scrollbar lg:my-2 my-4">
			{users.map((user, idx) => (
				<div className="instagram-gradient rounded-full" key={idx}>
					<div className="m-[.1rem] border-black border-2 overflow-hidden rounded-full min-w-[4rem]">
						<img
							src={user.avatar}
							className="object-contain w-full"
							alt="avatar"
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Stories;
