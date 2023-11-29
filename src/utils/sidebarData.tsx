import avatar from "@/components/avatar";
import {
  Bars3Icon,
  ChatBubbleOvalLeftIcon,
  FilmIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

export const SideBarData = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Search",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Explore",
    icon: MapIcon,
  },
  {
    name: "Reels",
    icon: FilmIcon,
  },
  {
    name: "Messages",
    icon: ChatBubbleOvalLeftIcon,
  },
  {
    name: "Notifications",
    icon: HeartIcon,
  },
  {
    name: "Profile",
    icon: avatar,
  },
  {
    name: "More",
    icon: Bars3Icon,
  },
];
