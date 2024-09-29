import { Tooltip } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/StateContext";

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }
    
    return ( 
        <aside className="h-screen w-full p-5 overflow-auto">
            <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 text-black dark:text-zinc-200 text-xl font-extrabold">
                    <SiShopware /> <span>Shoppy</span>
                </Link>
                <Tooltip title="Menu" placement="top" arrow>
                    <button onClick={() => setActiveMenu(prevState => !prevState)}>
                        <MdOutlineCancel className="text-black dark:text-zinc-200" size={22}/>
                    </button>
                </Tooltip>
            </div>
            <div className="mt-10 flex flex-col gap-2">
                {links.map((item,i) => (
                    <div key={i} className="my-4">
                        <p className="text-gray-400 uppercase mb-4">{item.title}</p>
                        <div className="flex flex-col gap-6">
                        {
                            item.links.map((link,i) => (
                                <NavLink to={`/${link.name}`} key={i} onClick={handleCloseSidebar} style={({isActive}) => ({backgroundColor: isActive ? currentColor : ""})} className={({ isActive }) => `flex items-center gap-4 ml-3 py-3 px-4 rounded-md ${isActive ? 
                                "bg-[${currentColor}] text-white" : "text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray transition-all duration-300"}`}>
                                    {link.icon}
                                    <span className="capitalize">{link.name}</span>
                                </NavLink>
                            ))
                        }
                        </div>
                   </div>
                ))}
            </div>
        </aside>
     );
}
 
export default Sidebar;