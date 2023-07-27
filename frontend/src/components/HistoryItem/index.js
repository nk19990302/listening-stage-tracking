import React from "react";
import "./historyItem.css";
import { MdDelete } from "react-icons/md";

const HistoryItem = ({ deleteItem, date, stage }) => {
    return (
        <div className="history-wrapper">
            <p className="date">{date}</p>
            <span className="stage-with-delete">
                <p className="stage">{stage}</p>
                <MdDelete size={18} onClick={deleteItem} />
            </span>
        </div>
    );
};

export default HistoryItem;
