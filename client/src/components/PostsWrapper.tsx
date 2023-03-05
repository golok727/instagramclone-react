import React from "react";

const PostsWrapper: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="p-2   flex flex-col  md:w-2/3 mx-auto mt-10">
			{children}
		</div>
	);
};

export default PostsWrapper;
