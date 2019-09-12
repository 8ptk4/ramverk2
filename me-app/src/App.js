import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Reports from './components/views/Reports';
import About from './components/views/About';
import Register from './components/views/Register';
import Playground from './components/views/Playground';
import NoMatch from './components/views/NoMatch';
import styled from "styled-components";

const Main = styled.main`
    img {
        border: 2px solid grey;
        margin: 10px;
    }
    
    section {
        padding: 10px;
        color: grey;
    }

    h1 {
        color: #E65950;
    }
`;

const App = () => {
    const [title, setTitle] = useState('Default');
    return ( 
        <>  
            <Header />
                <Main className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{title}</h1>
                            <hr />
                            <BrowserRouter>
                                <Switch>
                                <Route path="/" exact render={props => <About {...props} updateTitle={setTitle} />}/>
                                <Route path="/about" render={props=><About {...props} updateTitle={setTitle} />}/>
                                <Route path="/reports/week/1" render={props => <Reports {...props} updateTitle={setTitle} />}/>
                                <Route path="/register" render={props => <Register {...props} updateTitle={setTitle} />}/>
                                <Route path="/playground" render={props => <Playground {...props} updateTitle={setTitle} />} />
                                <Route render={props => <NoMatch {...props} updateTitle={setTitle} />} />
                                </Switch>
                            </BrowserRouter>
                            <hr />
                        </div>
                    </div>
                </Main>
            <Footer />
        </>
    );
};



export default App;