import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Reports from './components/views/Reports';
import About from './components/views/About';
import Register from './components/views/Register';
import Signin from './components/views/Signin';
import NoMatch from './components/views/NoMatch';
import styled from "styled-components";
import LoggedIn from './components/views/LoggedIn';
import CreateReport from './components/views/report/CreateReport';
import EditReport from './components/views/report/EditReport';
import ShowReports from './components/views/Reports';

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
            <BrowserRouter>
                <Header />
                    <Main className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>{title}</h1>
                                <hr />
                                    <Switch>
                                        <Route path="/" exact render={props => <About {...props} updateTitle={setTitle} />}/>
                                        <Route path="/about" render={props=><About {...props} updateTitle={setTitle} />}/>
                                        <Route path="/reports/create" render={props => <CreateReport {...props} updateTitle={setTitle} />} />
                                        <Route path="/register" render={props => <Register {...props} updateTitle={setTitle} />}/>
                                        <Route path="/reports/edit/:title" render={props => <EditReport {...props} updateTitle={setTitle} />}/>
                                        <Route path="/reports/week/:title" render={props => <ShowReports {...props} updateTitle={setTitle} />} />
                                        <Route render={props => <NoMatch {...props} updateTitle={setTitle} />} />
                                    </Switch>
                                <hr />
                            </div>
                        </div>
                    </Main>
                <Footer />
            </BrowserRouter>
        </>
    );
};



export default App;