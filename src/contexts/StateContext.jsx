import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState(localStorage.getItem("themeColor") || "#03C9D7");
    const [currentMode, setCurrentMode] = useState(localStorage.getItem("themeMode") || "Light");
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode",e.target.value)
        setThemeSettings(false)
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem("themeColor",color)
        setThemeSettings(false)
    }

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    return ( 
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            setMode,
            setColor,
            currentColor,
            currentMode,
            themeSettings,
            setThemeSettings
        }}>
            {children}
        </StateContext.Provider>
     );
}
 
export default ContextProvider;

export const useStateContext = () => useContext(StateContext)