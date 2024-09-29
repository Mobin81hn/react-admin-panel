import { MdOutlineCancel } from "react-icons/md";
import { themeColors } from "../data/dummy";
import { BsCheck } from "react-icons/bs";
import { Tooltip } from "@mui/material";
import { useStateContext } from "../contexts/StateContext";

const ThemeSettings = () => {
    const {setColor, setMode, currentMode, currentColor, setThemeSettings} = useStateContext();

    return ( 
        <div className="bg-half-transparent fixed top-0 right-0 w-screen h-screen z-[5000]">
            <div className={`absolute top-0 right-0 w-[320px] h-full bg-white px-4 py-5 transition-all duration-300`}>
                <div className="flex items-center justify-between pb-6">
                    <p className="font-semibold text-zinc-600">Settings</p>
                    <button className="text-zinc-500" onClick={() => setThemeSettings(false)}>
                        <MdOutlineCancel size={20}/>
                    </button>
                </div>
                <div className="border-t-1 border-color py-4">
                    <p className="font-semibold text-zinc-600">Theme Options</p>
                    <div className="mt-4">
                        <input 
                            type="radio" 
                            id="light"
                            name="theme"
                            value="Light"
                            className="cursor-pointer"
                            onChange={setMode}
                            checked={currentMode === "Light"}
                        />
                        <label htmlFor="light" className="ml-2 cursor-pointer">
                            Light
                        </label>
                    </div>
                    <div className="mt-4">
                        <input 
                            type="radio" 
                            id="dark"
                            name="theme"
                            value="Dark"
                            className="cursor-pointer"
                            onChange={setMode}
                            checked={currentMode === "Dark"}
                        />
                        <label htmlFor="dark" className="ml-2 cursor-pointer">
                            Dark
                        </label>
                    </div>
                </div>
                <div className="border-t-1 border-color pt-4">
                    <p className="font-semibold text-zinc-600">Theme Colors</p>
                    <div className="flex items-center gap-2 mt-4">
                        {
                            themeColors.map(({name,color},i) => (
                                <Tooltip key={i} title={name} placement="bottom" arrow>
                                    <button onClick={() => setColor(color)} style={{backgroundColor: color}} className="flex justify-center items-center w-9 h-9 rounded-full text-2xl text-white">
                                        <BsCheck className={color === currentColor ? "block" : "hidden"}/>
                                    </button>
                                </Tooltip>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ThemeSettings;