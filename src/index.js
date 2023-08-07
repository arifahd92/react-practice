import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './ContextPractice/ContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ContextProvider >
      <App />
      <h1>hello</h1>
    </ContextProvider>
  </>

);
