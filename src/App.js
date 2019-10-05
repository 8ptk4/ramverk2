import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/views/About';
import Chat from './components/views/chat/Chat';
import Register from './components/views/Register';
import NoMatch from './components/views/NoMatch';
import styled from 'styled-components';
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
    color: #e65950;
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
              <hr />
              <Switch>
                <Route path="/" exact render={props => <About {...props} />} />
                <Route
                  path="/chat"
                  exact
                  render={props => <Chat {...props} />}
                />
                <Route path="/about" render={props => <About {...props} />} />
                <Route
                  path="/reports/create"
                  render={props => <CreateReport {...props} />}
                />
                <Route
                  path="/register"
                  render={props => <Register {...props} />}
                />
                <Route
                  path="/reports/edit/:title"
                  render={props => <EditReport {...props} />}
                />
                <Route
                  path="/reports/week/:title"
                  render={props => <ShowReports {...props} />}
                />
                <Route render={props => <NoMatch {...props} />} />
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
