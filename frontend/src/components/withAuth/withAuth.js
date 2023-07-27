import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
    const WithAuth = (props) => {
        const navigate = useNavigate();
        const [userId] = useState(localStorage.getItem("userId"));

        useEffect(() => {
            if (userId == null) {
                navigate("/login");
            }
        }, [navigate, userId]);

        return <WrappedComponent {...props} userId={userId} />;
    };
    return WithAuth;
};

export default withAuth;
