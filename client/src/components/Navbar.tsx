import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

import { AiOutlineHeart, AiOutlineInstagram } from "react-icons/ai";
import { CgMenuMotion } from "react-icons/cg";
import InstagramLogo from "../assets/instagram.svg";
import { NavBarTabs } from "../content";
import NavTabItem from "./NavTabItem";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
const Navbar: React.FC = () => {
	const [searchBarActive, setSearchBarActive] = useState(false);

	const { setMoreMenuOpen, sidebarOpen } = useContext(SidebarContext);
	return (
		<>
			<header className="absolute bg-black mob-header gap-4  flex justify-around items-center md:hidden w-full px-6 py-5 border-b-[1px] border-neutral-800 z-10">
				<img src={InstagramLogo} alt="" />
				<div className="search relative flex-1 w-full">
					<input
						onFocus={() => setSearchBarActive(true)}
						onBlur={() => setSearchBarActive(false)}
						type="text"
						className={`${
							!searchBarActive && "placeholder-style"
						} w-full p-1 rounded bg-neutral-800`}
						placeholder="Search"
					/>
					{!searchBarActive && (
						<BiSearch className="absolute top-1/2 left-2 fill-gray-500 text-xl -translate-y-1/2" />
					)}
				</div>
				<AiOutlineHeart className="text-2xl icon-hover" />
			</header>

			<div
				className={`fixed transition-all duration-200 ease-linear bg-black mobile-nav  flex justify-between items-center md:flex-col md:left-0 md:top:0 md:h-full md:w-fit  md:border-r-[1px] border-gray-800 bottom-0 w-full lg:pl-5 ${
					sidebarOpen ? "lg:pr-2" : "lg:pr-24"
				} md:px-6 px-8 py-3 text-2xl border-t-[1px] z-10`}
			>
				<div className="md:w-fit w-full flex md:flex-col md:justify-start justify-between md:text-2xl gap-5 ">
					<AiOutlineInstagram
						className={`mb-6 hidden md:block ${
							sidebarOpen ? "" : "lg:hidden"
						} self-center`}
					/>
					{!sidebarOpen && (
						<img
							src={InstagramLogo}
							alt=""
							className="hidden lg:block pl-3 mt-8"
							width={100}
						/>
					)}
					{/*  */}

					{NavBarTabs.map((tab, idx) => (
						<NavTabItem key={idx} tab={tab} />
					))}
				</div>

				{/*Hello  */}
				{/* Profile Pic */}

				<div
					onClick={() => setMoreMenuOpen((prev) => !prev)}
					className="flex items-center mb-12 cursor-pointer select-none"
				>
					<CgMenuMotion className="hidden md:block " />
					{!sidebarOpen && (
						<h3 className="text-sm ml-2 hidden lg:block">More</h3>
					)}
				</div>
			</div>
		</>
	);
};
export default Navbar;
