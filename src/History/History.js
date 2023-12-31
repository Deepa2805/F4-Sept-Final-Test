import React from "react";
import './history.css';
import { useSelector } from 'react-redux';

export default function History() {

    const history = useSelector((state) => state.history.history)
    return (
        <div className="history">
            <h1>Searched History</h1>
            <ul>
                {history.map((item, index, arr) => (
                    <li key={arr.length + 1}>
                        {item.word}
                    </li>
                ))}
            </ul>

        </div>
    );
}
