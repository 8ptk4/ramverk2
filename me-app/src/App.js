import React from 'react';
import Header from './components/layout/Header'; 
import Footer from './components/layout/Footer';
import Router from './components/Router';



const App = () => (
    <>  
        <header>
            <Header />
        </header>
        <main class="container">
            <div class="row">
                <div class="col-md-12">
                    <Router />
                </div>
            </div>
        </main>
        <footer class="page-footer font-small cyan darken-3">
            <Footer />
        </footer>
        
    </>
);



export default App;