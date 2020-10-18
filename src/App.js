import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import NavMain from './components/NavMain';
import NavHome from './components/NavHome';
import ArrowDown from './components/ArrowDown';
import ArrowUp from './components/ArrowUp';
import LandingPage from './components/LandingPage';
import Learnable  from './components/Learnable';
import Footer from './components/Footer';
import SoftwareDeveloper from './components/SoftwareDeveloper';
import ProductDesigner from './components/ProductDesigner';
import Apply from './components/Apply';
import Journal from './components/Journal';
import FAQ from './components/FAQ';


class App extends React.Component{
    render(){
        return(
            <div className="App" >
                <Router>
                    <NavMain/>
                        <Switch>
                            <Route path="/Learnable" exact component={()=> <Learnable/>}/>
                            <Route path="/" exact component={()=> <LandingPage/>}/>
                        </Switch>
                    

                    <NavHome/>
                        <Switch>
                            <Route path="/Learnable" exact component={()=> <Learnable/>}/>
                            <Route path="/SoftwareDeveloper" exact component={()=> <SoftwareDeveloper/>}/>
                            <Route path="/ProductDesigner" exact component={()=> <ProductDesigner/>}/>
                            <Route path="/Apply" exact component={()=> <Apply/>}/>
                            <Route path="/Journal" exact component={()=> <Journal/>}/>
                            <Route path="/Faq" exact component={()=> <FAQ/>}/>
                        </Switch>

                   
                </Router>
                <div>

                </div>
                <Footer/> 
               
                
            </div>
        );
    }
}
export default App;
