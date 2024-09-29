import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { FiSettings } from "react-icons/fi";
import { Tooltip } from "@mui/material";
import { routes } from "./routes/routes";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./contexts/StateContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeSettings from "./components/ThemeSettings";

function App() {
  const {
    activeMenu,
    currentColor,
    currentMode,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="fixed bottom-10 right-8 z-40">
          <Tooltip title="Settings" placement="top" arrow>
            <button
              onClick={() => setThemeSettings(true)}
              style={{ backgroundColor: currentColor }}
              className="text-3xl p-3 rounded-full text-white hover:drop-shadow-xl"
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>

        <div
          className={`w-72 fixed z-30 top-0 ${
            activeMenu
              ? "left-0 sidebar dark:bg-secondary-dark-bg bg-white"
              : "-left-72 overflow-hidden dark:bg-secondary-dark-bg"
          } transition-all duration-300`}
        >
          <Sidebar />
        </div>

        {themeSettings && <ThemeSettings />}

        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg bg-main-bg min-h-screen content ml-auto transition-all duration-300"
              : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen ml-auto transition-all duration-300"
          }
        >
          <div className="fixed top-0 right-0 md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div className="pt-24 md:pt-0">
            <Routes>
              {routes.map((route, i) => (
                <Route key={i} path={route.path} element={route.component} />
              ))}
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
