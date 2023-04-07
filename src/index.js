import React from "react";
import  ReactDOM  from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import ReactNews from "./ReactNews";
import JavaScriptNews from "./Javascript";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './index.css';
import App from "./App";
import NewsLayout from "./NewsLayout";
import NewsResult from "./NewsResult";
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
         <Router>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/news" element={<NewsLayout />}>
                        <Route path=":newsTopic" element={<NewsResult />}/>
                    </Route>
                   
                    <Route path="/" element={<Home />}/>
                </Route>
            </Routes>
         </Router>
    // </React.StrictMode>
   
);