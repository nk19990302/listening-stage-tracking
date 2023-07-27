import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ items = [] }) => {
    const navigate = useNavigate();
    console.log("xxx", items);

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className="header-wrapper">
            <h2 className="logo" onClick={() => navigate("/")}>
                Co.labx
            </h2>
            <div className="nav-items">
                {items.map((it) => {
                    return (
                        <p
                            key={it.title}
                            className="item"
                            onClick={() => navigate(it.path)}
                        >
                            {it.title}
                        </p>
                    );
                })}
                <p className="item" onClick={logout}>
                    Logout
                </p>
            </div>
        </div>
    );
};

export default Header;
