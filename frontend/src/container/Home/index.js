import React, { useState, useEffect } from "react";
import { recordApis } from "../../services/records";
import { getDate } from "../../utils/date";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Button from "../../components/Button";
import Header from "../../components/Header";
import withAuth from "../../components/withAuth/withAuth";

const navItemsHome = [
    {
        title: "History",
        path: "/history",
    },
];

const Home = ({ userId }) => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState("");
    const [dataSaved, setDataSaved] = useState(false);
    useEffect(() => {
        (async () => {
            const res = await recordApis.getByDateAndUserId(userId, getDate());
            if (res.status === "success" && res.data) {
                setDataSaved(true);
                setSelected(res.data.value);
            }
        })();
    }, [navigate, userId]);

    const saveRecord = async () => {
        const res = await recordApis.addRecord({
            userId: userId,
            date: getDate(),
            value: selected,
        });
        if (res.status === "success") {
            setDataSaved(true);
        }
    };

    return (
        <>
            <Header items={navItemsHome} />
            <div className="page-wrapper">
                <div className="main-wrapper">
                    <h2 className="heading">
                        {dataSaved
                            ? "Your stage of listening for today!"
                            : "Select your stage of listening for today"}
                    </h2>
                    {selected && (
                        <div
                            className={dataSaved ? "dropdown" : "dropdown"}
                            onClick={() => !dataSaved && setSelected("")}
                        >
                            {selected ? selected : "Select Stage of Listening"}
                        </div>
                    )}
                    {selected === "" && (
                        <div className="dropdown-content">
                            <div
                                className="option stage1"
                                onClick={() => setSelected("Stage 1")}
                            >
                                Stage 1
                            </div>
                            <div
                                className="option stage2"
                                onClick={() => setSelected("Stage 2")}
                            >
                                Stage 2
                            </div>
                            <div
                                className="option stage3"
                                onClick={() => setSelected("Stage 3")}
                            >
                                Stage 3
                            </div>
                        </div>
                    )}
                    {selected !== "" && !dataSaved && (
                        <Button
                            disabled={dataSaved}
                            onClick={saveRecord}
                            style={{ marginTop: 16 }}
                        >
                            Save
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};

export default withAuth(Home);
