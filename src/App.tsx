import React from 'react';
import styles from './app.module.css';
import logo from '../public/logo.png';
import './main.scss';

interface AppProps {
    count: number;
}

export const App: React.FC<AppProps> = ({ count }) => {
    return (
        <div className={styles.wrapper}>
            <h1>Hello Andrey</h1>
            <img src={logo} alt="logo" />
            <p>{count}</p>
        </div>
    );
};
