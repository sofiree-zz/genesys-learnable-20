import React from 'react';
import NavMain from './NavMain';
import NavHome from './NavHome';
import Faq11 from "./images/faq11.png";
import Drop from "./images/dropdown.svg";
import Subscribe from './Subscribe';
import Footer from './Footer';
import ArrowUp from './ArrowUp';



class FAQ extends React.Component{
    render(){
        return(
            <div>
                <div className="content5">
                    <section className="dropdown">
                        <section className="faq_">
                            <h1>FAQ</h1>
                            <img src={Faq11}/>
                        </section>

                
                        <dl className="asked_questions">
    {/* faq 1 */}
                            <dt aria-expanded="false" aria-controls="faq1_ans">
                                    How many people can attend a course? <img src={Drop}/>   
                            </dt>
                            <dd id="faq1_ans" class="ans" > </dd>
                            <hr/>
    {/* faq 2 */}
                            <dt aria-expanded="false" aria-controls="faq2_ans">
                                 What's the learning experience like? <img src={Drop}/>      
                            </dt>
                            <dd id="faq2_ans" class="ans" ></dd>
                            <hr/>
    {/* faq 3 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                                    Who are the coaches? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>
                            <hr/>
    {/* faq 4 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                               How far in advance should I book? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>   
                            <hr/>
    {/* faq 5 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                                CAn you customize your coourses? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>       
                            <hr/>      
    {/* faq 6 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                                Who are the coaches? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>   
                            <hr/>          
    {/* faq 7 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                                Who are the coaches? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>  
                            <hr/>
    {/* faq 8 */}
                             <dt aria-expanded="false" aria-controls="faq3_ans">
                                Who are the coaches? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>  
                            <hr/> 
    {/* faq 9 */}
                             <dt aria-expanded="false" aria-controls="faq3_ans">
                                Who are the coaches? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>  
                            <hr/>          
    {/* faq 10 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                                Who are the coaches? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>   
                            <hr/>     
    {/* faq 11 */}
                             <dt aria-expanded="false" aria-controls="faq3_ans">
                                Who are the coaches? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>     
                            <hr/>           
    {/* faq 12 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                                Who are the coaches? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>  
                            <hr/>                   
    {/* faq 13 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                                Who are the coaches? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd> 
                            <hr/>          
    {/* faq 14 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                                Who are the coaches? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>   
                            <hr/>    
    {/* faq 15 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                                Who are the coaches? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd> 
                        </dl>  
                    </section>
                </div>
                <ArrowUp/>
                <Subscribe/>       
            </div>
        );
    }
}

export default FAQ;




 
