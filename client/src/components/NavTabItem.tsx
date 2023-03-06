import React from "react";
import { TNavBarTabs } from "../content";
import { Link } from "react-router-dom";
const NavTabItem: React.FC<{ tab: TNavBarTabs }> = ({ tab }) => {
	return tab.link ? (
		<Link to={tab.link}>
			<div
				{...tab.props}
				className={`flex cursor-pointer items-center icon-hover ${
					!tab.isMobileVisible && "hidden md:inline-flex"
				}`}
			>
				<span>{<tab.icon className="" />}</span>
				<h3 className="text-base ml-4 hidden lg:block">{tab.text}</h3>
			</div>
		</Link>
	) : (
		<div
			{...tab.props}
			className={`flex cursor-pointer items-center icon-hover ${
				!tab.isMobileVisible && "hidden md:inline-flex"
			}`}
		>
			<span>{<tab.icon className="" />}</span>
			<h3 className="text-base ml-4 hidden lg:block">{tab.text}</h3>
		</div>
	);
};

export default NavTabItem;
