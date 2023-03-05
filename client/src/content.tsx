import { IconType } from "react-icons";
import { BiHomeAlt2, BiSearch } from "react-icons/bi";
import { MdOutlineExplore, MdOutlinePersonalVideo } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

interface TNavBarTabs {
	icon: IconType;
	text: string;
	isMobileVisible: boolean;
	opensSideBar: boolean;
	link?: string;
}

const NavBarTabs: TNavBarTabs[] = [
	{
		icon: BiHomeAlt2,
		text: "Home",
		isMobileVisible: true,
		opensSideBar: false,
		link: "/",
	},

	{
		icon: BiSearch,
		text: "Search",
		isMobileVisible: false,
		opensSideBar: false,
	},
	{
		icon: MdOutlineExplore,
		text: "Explore",
		isMobileVisible: true,
		opensSideBar: false,
	},
	{
		icon: MdOutlinePersonalVideo,
		text: "Reels",
		isMobileVisible: true,
		opensSideBar: false,
	},

	{
		icon: RiMessengerLine,
		text: "Messages",
		isMobileVisible: true,
		opensSideBar: false,
	},
	{
		icon: AiOutlineHeart,
		text: "Notifications",
		isMobileVisible: false,
		opensSideBar: false,
	},
	{
		icon: FiPlusCircle,
		text: "Create",
		isMobileVisible: true,
		opensSideBar: false,
	},
];

export { NavBarTabs };
