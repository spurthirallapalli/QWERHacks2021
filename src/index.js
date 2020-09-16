import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Apply from "./components/Apply";
import Faq from "./components/Faq";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import Mentors from "./components/Mentors";
import Resources from "./components/Resources";


const rootElement = document.getElementById("root");
ReactDOM.render(
   <BrowserRouter>
   <div className="content">
    <Navbar/>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/apply" component={Apply} />
     <Route path="/faq" component={Faq} />
     <Route path="/schedule" component={Schedule} />
     <Route path="/sponsors" component={Sponsors} />
     <Route path="/mentors" component={Mentors} />
     <Route path="/resources" component={Resources} />
   </Switch>
   </div>
   </BrowserRouter>
   ,
   rootElement
);