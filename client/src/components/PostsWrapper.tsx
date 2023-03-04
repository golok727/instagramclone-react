import React from "react";

const PostsWrapper: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="p-0 md:px-2 lg px-4 flex flex-col lg:w-1/2 md:w-2/3 mx-auto mt-10">
			{children}
		</div>
	);
};

export default PostsWrapper;
