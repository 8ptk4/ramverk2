import React from 'react';
import Header from './components/layout/Header'; 
import Footer from './components/layout/Footer';
import Router from './components/Router';



const App = () => (
    <>  
        <Header />
        <main class="container">
            <div class="row">
                <div class="col-md-12">
                    <Router />
                </div>
            </div>
        </main>
        <Footer />
    </>
);



export default App;