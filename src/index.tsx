import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,Route, Routes,Navigate } from 'react-router-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Main from '../src/view/main';
import Settings from '../src/view/settings';
import Wallet from '../src/view/wallet';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <HashRouter>
    <Routes>
      <Route path="/" element = {<Navigate to="/Home"/>}/>
      <Route path="/Home" element = {<Main/>}/>
      <Route path="/settings" element = {<Settings/>}/>
      <Route path="/wallet" element = {<Wallet/>}/>

    </Routes>
  </HashRouter>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
