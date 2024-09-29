import { Tooltip } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../contexts/StateContext";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import avatar from "./../data/avatar.jpg"
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect } from "react";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
    return (
        <Tooltip title={title} placement="top" arrow>
            <button onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
                <span style={{backgroundColor: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
                {icon}
            </button>
        </Tooltip>
    )
}

const Navbar = () => {
    const { setActiveMenu, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener("resize",handleResize)
    },[])

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    },[screenSize])

    return ( 
        <div className="flex items-center justify-between p-4">
            <NavButton 
                title="Menu" 
                color={currentColor}
                icon={<AiOutlineMenu/>} 
                customFunc={() => setActiveMenu((prevState) => !prevState)} 
            />

            <div className="flex">
                <NavButton 
                    title="Cart" 
                    color={currentColor}
                    icon={<FiShoppingCart/>} 
                    customFunc={() => handleClick("cart")} 
                />
                <NavButton 
                    title="Chat" 
                    dotColor="#03C9D7"
                    color={currentColor}
                    icon={<BsChatLeft/>} 
                    customFunc={() => handleClick("chat")} 
                />
                <NavButton 
                    title="Notification" 
                    dotColor="#03C9D7"
                    color={currentColor}
                    icon={<RiNotification3Line/>} 
                    customFunc={() => handleClick("notification")} 
                />
                <Tooltip title="Profile" placement="bottom" arrow>
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick("userProfile")}>
                        <img src={avatar} alt="profile" className="rounded-full w-8 h-8" />
                        <p className="text-gray-400 text-14">
                            <span>Hi, </span> {" "} <span className="font-bold">Michael</span>
                        </p>
                        <MdKeyboardArrowDown className="text-gray-400 text-14"/>
                    </div>
                </Tooltip>
            </div>
        </div>
     );
}
 
export default Navbar;