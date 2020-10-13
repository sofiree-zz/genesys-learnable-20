import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


// import './App.css';
import NavMain from './components/NavMain';
import Landingpage from './components/Landingpage';
import Navhome from './components/Navhome';
import Footer from './components/Footer';
import Learnable  from './components/Learnable';
import Softwaredeveloper from './components/Softwaredeveloper';
import Productdesigner from './components/Productdesigner';
import Apply from './components/Apply';
import Journal from './components/Journal';
import FAQ from './components/FAQ';


class App extends Component{
    render(){
        return(
            <div className="App" >
                <Router>
                    <NavMain/>
                        <Switch>
                            <Route path="/Learnable" exact component={()=> <Learnable/>}/>
                            <Route path="/" exact component={()=> <Landingpage/>}/>
                        </Switch>
                    {/* <Landingpage/> */}

                    <Navhome/>
                        <Switch>
                            <Route path="/Learnable" exact component={()=> <Learnable/>}/>
                            <Route path="/Softwaredeveloper" exact component={()=> <Softwaredeveloper/>}/>
                            <Route path="/Productdesigner" exact component={()=> <Productdesigner/>}/>
                            <Route path="/Apply" exact component={()=> <Apply/>}/>
                            <Route path="/Journal" exact component={()=> <Journal/>}/>
                            <Route path="/Faq" exact component={()=> <FAQ/>}/>
                        </Switch>

                    <Footer/> 
                </Router>

               
                
            </div>
        );
    }
}



export default App;
