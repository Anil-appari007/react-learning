import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='column'>
          <HelloWorld msg='hello world... from class props'/>
          <HelloWorld2 msg='hello world from function props'/>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

