import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
    <HelloWorld2 />
  </React.StrictMode>
);

