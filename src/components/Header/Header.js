import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

// Ícones
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Rotas de navegação
    const routes = [
        { path: "/", label: "Dashboard" },
        { path: "/websites", label: "Websites" },
        { path: "/click-to-on", label: "Click To On" },
        { path: "/databases", label: "Databases" },
        { path: "/click-to-launch", label: "Click To Launch" },
        { path: "/train-models", label: "Train Models" },
        { path: "/terminal", label: "Terminal" },
        { path: "/paths", label: "Paths" },
        { path: "/monitoring", label: "Monitoring" },
    ];

    return (
        <header className="header">
            <div className="header-content">
                <h1 className="logo">Human-OS</h1>
                <nav className="navbar">
                    <ul className="nav-links">
                        {routes.map((route) => (
                            <li key={route.path} className="nav-item">
                                <NavLink
                                    to={route.path}
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    {route.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="dropdown">
                        <button className="dropdown-toggle" onClick={toggleDropdown}>
                            {dropdownOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                        </button>
                        {dropdownOpen && (
                            <ul className="dropdown-menu">
                                {routes.map((route) => (
                                    <li key={route.path} className="dropdown-item">
                                        <NavLink
                                            to={route.path}
                                            className="dropdown-link"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            {route.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
