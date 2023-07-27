const BASE_URL = process.env.REACT_APP_BASE_URL;

export const recordApis = {
    getByDateAndUserId: async (userId, date) => {
        const res = await fetch(BASE_URL + "record/" + userId + "/" + date);
        const data = await res.json();
        return data;
    },
    getByUserId: async (userId) => {
        const res = await fetch(BASE_URL + "record/" + userId);
        const data = await res.json();
        return data;
    },
    deleteById: async (id) => {
        const res = await fetch(BASE_URL + "record/" + id, {
            method: "delete",
        });
        const data = await res.json();
        return data;
    },
    addRecord: async (obj) => {
        const res = await fetch(BASE_URL + "record/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });
        const data = await res.json();
        return data;
    },
};
