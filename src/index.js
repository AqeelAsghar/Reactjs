import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';


ReactDOM.render(
    // Wrap our whole app into the ContextProvider.js file so whole app use it
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root'));


