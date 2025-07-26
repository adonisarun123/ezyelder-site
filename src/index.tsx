import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root') as HTMLElement;

// Check if the app is being pre-rendered by react-snap
if (rootElement.hasChildNodes()) {
  // Use hydrateRoot for pre-rendered content (react-snap)
  ReactDOM.hydrateRoot(rootElement, <App />);
} else {
  // Use createRoot for normal development/production
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
