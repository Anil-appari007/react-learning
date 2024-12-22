import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='column'>
          {/* <HelloWorld msg='hello world... from class props'/> */}
          {/* <HelloWorld2 msg='hello world from function props'/> */}
          <App msg='test from app'></App>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

