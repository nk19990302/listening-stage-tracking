import React, { useState } from "react";
import "./login.css";
import { authApis } from "../../services/auth";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        const res = await authApis.login(username, password);
        if (res.status === "success") {
            localStorage.setItem("userId", res.data._id);
            localStorage.setItem("name", res.data.name);
            navigate("/");
        } else {
            alert("Something went wrong");
        }
    };

    return (
        <div className="login-wrapper">
            <h2 className="title">Login</h2>
            <input
                className="input"
                type="text"
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
                className="input"
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            ></input>
            <Button onClick={login}>Login</Button>
            <p className="btn-text" onClick={() => navigate("/signup")}>
                Signup
            </p>
        </div>
    );
};

export default Login;
