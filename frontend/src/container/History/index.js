import React, { useState, useEffect } from "react";
import "./history.css";
import { recordApis } from "../../services/records";
import Header from "../../components/Header";
import HistoryItem from "../../components/HistoryItem";
import withAuth from "../../components/withAuth/withAuth";

const History = ({ userId }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            await fetchItem();
        })();
    }, []);

    const fetchItem = async () => {
        const res = await recordApis.getByUserId(userId);
        if (res.status === "success") {
            setData(res.data);
        }
    };

    const deleteItem = async (id) => {
        const res = await recordApis.deleteById(id);
        if ((res.status = "success")) {
            alert("Item deleted");
            await fetchItem();
        } else {
            alert("Something went wrong");
        }
    };

    return (
        <>
            <Header />
            <div className="page-wrapper">
                <div className="histories">
                    <h2 className="heading">Your Previous Records</h2>
                    <hr></hr>
                    {data.map((it, index) => {
                        return (
                            <HistoryItem
                                stage={it.value}
                                date={it.date}
                                key={it._id}
                                deleteItem={() => deleteItem(it._id)}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default withAuth(History);
