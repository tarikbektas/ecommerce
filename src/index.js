import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import 'rsuite/dist/rsuite.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   
import 'primereact/resources/primereact.min.css';                   
import 'primeicons/primeicons.css';  
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";        
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
    <App />
  </Router>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
