import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import './styles.scss';
import BoardView from './components/Board';


const App = () => {
    return <BoardView />;
};

createRoot(document.getElementById('root')).render(<App />);