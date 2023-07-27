import React, { useState } from "react";
import "./signup.css";
import { authApis } from "../../services/auth";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signup = async () => {
        const res = await authApis.signup(name, username, password);
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
            <h2 className="title">Signup</h2>
            <input
                className="input"
                type="text"
                value={name}
                placeholder="username"
                onChange={(e) => setName(e.target.value)}
            ></input>
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
            <Button onClick={signup}>Signup</Button>
            <p className="btn-text" onClick={() => navigate("/login")}>
                Login
            </p>
        </div>
    );
};

export default Signup;
