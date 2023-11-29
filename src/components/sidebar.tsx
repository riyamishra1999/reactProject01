import { SideBarData } from "@/utils/sidebarData";

function Sidebar() {
  return (
    <div className="p-6 max-w-xs border-r border-gray-800 min-h-screen flex flex-col space-y-8 ">
      <p className="font-billabong text-3xl font-light cursor-pointer w-fit">
        Instagram
      </p>
      <div className="flex flex-col items-start justify-start space-y-2 -ml-2 relative flex-1 ">
        {SideBarData.map((item, key) => (
          <div
            key={`sidebar__${item.name}__${key}`}
            className="text-base font-medium tracking-tighter cursor-pointer flex items-center justify-start space-x-4 group w-full hover:bg-gray-900 py-3 rounded-xl pl-2  last:absolute bottom-2 last:pr-8"
          >
            <item.icon className="h-7 w-7 group-hover:scale-105" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
