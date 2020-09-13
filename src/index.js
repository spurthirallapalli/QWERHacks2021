import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Apply from "./Apply";
import Faq from "./Faq";
import Schedule from "./Schedule";
import Sponsors from "./Sponsors";
import Mentors from "./Mentors";
import Resources from "./Resources";


const rootElement = document.getElementById("root");
ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/apply" component={Apply} />
     <Route path="/faq" component={Faq} />
     <Route path="/schedule" component={Schedule} />
     <Route path="/sponsors" component={Sponsors} />
     <Route path="/mentors" component={Mentors} />
     <Route path="/resources" component={Resources} />
   </Switch>
   </BrowserRouter>,
   rootElement
);