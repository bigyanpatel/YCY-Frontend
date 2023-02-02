import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import RecoilizeDebugger from 'recoilize';
import { RecoilRoot } from 'recoil';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RecoilRoot>
      {/* <RecoilizeDebugger root={root}/> */}
      <App />
    </RecoilRoot>
  </BrowserRouter>
);
