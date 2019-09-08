import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Reports from './Reports';
import About from './About';
import NoMatch from './NoMatch';



const Routes = () => (
    <>
        <Router>
            <Switch>
                <Route path="/" exact component={About} />
                <Route path="/about" component={About} />
                <Route path="/reports" component={Reports} />
                <Route component={NoMatch} />
            </Switch>        
        </Router>
    </>
)



export default Routes;