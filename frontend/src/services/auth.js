const BASE_URL = process.env.REACT_APP_BASE_URL;

export const authApis = {
    login: async (username, password) => {
        const res = await fetch(BASE_URL + "auth/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        return data;
    },
    signup: async (name, username, password) => {
        const res = await fetch(BASE_URL + "auth/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, username, password }),
        });
        const data = await res.json();
        return data;
    },
};
