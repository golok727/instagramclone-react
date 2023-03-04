import React from "react";

interface Props {
	username: string;
	avatar: string;
	image: string;
}

const Post: React.FC<Props> = ({ avatar, image, username }) => {
	return (
		<div>
			{/* Header */}
			<div className="flex items-center mb-5">
				<div className="instagram-gradient rounded-full">
					<div className="m-[.1rem] border-black border-2 overflow-hidden rounded-full w-10">
						<img src={avatar} alt="avatar" className="object-contain" />
					</div>
				</div>
				<h4 className="ml-2 font-bold text-xs">{username}</h4>
			</div>

			{/* Image */}
			<div className="aspect-square overflow-hidden rounded border-gray-800  border-[1px]">
				<img src={image} className="object-cover" alt="" loading="lazy" />
			</div>
			{/* Footer */}

			<div className="mb-5"></div>
		</div>
	);
};

export default Post;
