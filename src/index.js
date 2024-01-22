import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    console.log([1, 2, [3, 4]].flat());
    return <h1>Hello Andrey</h1>
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);