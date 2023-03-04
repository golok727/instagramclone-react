import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Post from "./Post";
import PostsWrapper from "./PostsWrapper";
import Stories from "./Stories";

const Feed: React.FC = () => {
	const { posts } = useContext(AppContext);

	return (
		<div className="flex-1">
			<Stories />
			<PostsWrapper>
				{posts.map((post, idx) => (
					<Post
						key={idx}
						image={post.image}
						username={post.username}
						avatar={post.avatar}
					/>
				))}
			</PostsWrapper>
		</div>
	);
};

export default Feed;
