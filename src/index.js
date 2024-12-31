import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css"; // Ensure this file exists and is correctly referenced.
import App from './App'; // Ensure App.js exists and is correctly referenced.

const root = ReactDOM.createRoot(document.getElementById('root')); // Check that 'root' exists in index.html
console.log(root); // Debugging: Check if root is created successfully.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

