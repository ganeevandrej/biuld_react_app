import React from 'react';
import { createRoot } from 'react-dom/client';
import img from "./logo.png";
import styles from "./index.module.css";
import "./main.css";

const App = () => {
    console.log([1, 2, [3, 4]].flat());
    return (
        <div className={styles.wrapper}>
            <h1>Hello Andrey</h1>
            <img src={img} />
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);