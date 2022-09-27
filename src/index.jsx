import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import './scss/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

if (module.hot) { module.hot.accept(); }