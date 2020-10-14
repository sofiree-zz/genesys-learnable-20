import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


// import './App.css';
import NavMain from './components/NavMain';
import Navhome from './components/Navhome';
import Landingpage from './components/Landingpage';
import Learnable  from './components/Learnable';
import Footer from './components/Footer';
import Softwaredeveloper from './components/Softwaredeveloper';
import Productdesigner from './components/Productdesigner';
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
                            <Route path="/" exact component={()=> <Landingpage/>}/>
                        </Switch>
                    

                    <Navhome/>
                        <Switch>
                            <Route path="/Learnable" exact component={()=> <Learnable/>}/>
                            <Route path="/Softwaredeveloper" exact component={()=> <Softwaredeveloper/>}/>
                            <Route path="/Productdesigner" exact component={()=> <Productdesigner/>}/>
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
