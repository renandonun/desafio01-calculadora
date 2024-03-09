import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import CreateGlobalStyle from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateGlobalStyle />
    <App />
  </React.StrictMode>
);