import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
interface Props {
	username: string;
	avatar: string;
	image: string;
	liked: boolean;
	description: string;
}

const Post: React.FC<Props> = ({
	avatar,
	image,
	username,
	liked,
	description,
}) => {
	const [showFullDesc, setShowFullDesk] = useState(false);
	const [postLiked, setPostLiked] = useState(liked);
	const [likeAnimation, setLikeAnimation] = useState(false);
	const truncateText = (text: string, maxChar: number = 45): string => {
		if (description.length > maxChar)
			return text.substring(0, maxChar) + " ...";
		return description;
	};

	return (
		<div className="">
			{/* Header */}
			<div className="flex items-center mb-5 ">
				<div className="instagram-gradient rounded-full">
					<div className="m-[.1rem] select-none border-black border-2 overflow-hidden rounded-full w-10">
						<img src={avatar} alt="avatar" className="object-contain" />
					</div>
				</div>
				<h4 className="ml-2 font-bold text-xs">{username}</h4>
			</div>

			{/* Image */}
			<div className="relative">
				<img
					src={image}
					onDoubleClick={() => {
						setPostLiked(true);
						setLikeAnimation(true);
						setTimeout(() => {
							setLikeAnimation(false);
						}, 1000);
					}}
					className="object-cover cursor-pointer"
					alt=""
					loading="lazy"
				/>
				{likeAnimation && (
					<AiFillHeart className="absolute top-1/2 left-1/2 text-[7rem] move opacity-90 ping duration-100" />
				)}
			</div>
			{/* Footer */}

			<div className="mb-7 mt-3 border-gray-700  border-b-[1px] p-2">
				<div className="text-2xl flex justify-between items-center">
					{/* TODO */}
					{/* Work on post Liking Function */}

					{/* Like Comment Direct */}
					<div className="flex gap-3">
						{postLiked ? (
							<AiFillHeart
								onClick={() => setPostLiked(false)}
								className="fill-red-500 animate-bounce animation-stop cursor-pointer"
							/>
						) : (
							<AiOutlineHeart
								className="cursor-pointer"
								onClick={() => setPostLiked(true)}
							/>
						)}
						<TbMessageCircle2 className="cursor-pointer" />
						<IoPaperPlaneOutline className="cursor-pointer" />
					</div>

					{/* Dave Icon */}
					<div className="text-2xl">
						<BsBookmark className="cursor-pointer" />
					</div>
				</div>

				{/* Title and description */}
				<div className="i-description pt-2">
					<div className="flex gap-2 items-center ">
						<p className="text-xs leading-5">
							<span className="font-bold text-xs pr-2">{username}</span>

							{showFullDesc ? description : truncateText(description, 100)}
							{description.length > 100 && !showFullDesc && (
								<span
									onClick={() => setShowFullDesk(true)}
									className="pl-2 hover:underline cursor-pointer"
								>
									More
								</span>
							)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
