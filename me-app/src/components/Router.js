import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Reports from './views/Reports';
import About from './views/About';
import Register from './views/Register';
import NoMatch from './views/NoMatch';



const Routes = () => (
    <>
        <Router>
            <Switch>
                <Route path="/" exact component={About} />
                <Route path="/about" exact component={About} />
                <Route path="/reports/week/1" exact component={Reports} />
                <Route path="/register" exact component={Register} />
                <Route component={NoMatch} />
            </Switch>        
        </Router>
    </>
)



export default Routes;