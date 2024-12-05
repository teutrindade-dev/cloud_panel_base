import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

// Ícones (você pode substituir pelos ícones desejados)
import { AiOutlineDashboard, AiOutlineSetting } from "react-icons/ai";
import { BiWorld, BiServer } from "react-icons/bi";
import { FaDatabase, FaCogs, FaTerminal } from "react-icons/fa";
import { MdMonitor, MdTrain } from "react-icons/md";

const Sidebar = () => {
    // Rotas de navegação
    const routes = [
        { path: "/", label: "Dashboard", icon: <AiOutlineDashboard /> },
        { path: "/websites", label: "Websites", icon: <BiWorld /> },
        { path: "/click-to-on", label: "Click To On", icon: <FaCogs /> },
        { path: "/databases", label: "Databases", icon: <FaDatabase /> },
        { path: "/click-to-launch", label: "Click To Launch", icon: <AiOutlineSetting /> },
        { path: "/train-models", label: "Train Models", icon: <MdTrain /> },
        { path: "/terminal", label: "Terminal", icon: <FaTerminal /> },
        { path: "/paths", label: "Paths", icon: <BiServer /> },
        { path: "/monitoring", label: "Monitoring", icon: <MdMonitor /> },
    ];

    return (
        <div className="sidebar-container">
            <ul className="sidebar-list">
                {routes.map((route) => (
                    <li key={route.path} className="sidebar-item">
                        <NavLink
                            to={route.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-button active"
                                    : "sidebar-button"
                            }
                        >
                            <span className="sidebar-icon">{route.icon}</span>
                            {route.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
