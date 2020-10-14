import React from 'react';
import NavMain from './NavMain';
import Navhome from './Navhome';
import Faq11 from "./images/faq11.png";
import Drop from "./images/dropdown.svg";
import Subscribe from './Subscribe';
import Footer from './Footer';

const questions=()=>{
    return(
        <div>
            <div className="content5">
                <section>
                    <h1>FAQ</h1>
                    <img src={Faq11}/>
                </section>

                <section className="dropdown">
                <dl className="asked_questions">
{/* faq 1 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq1_ans">
                            How many people can attend a course? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq1_ans" class="ans"></p>
                    </dd>
{/* faq 2 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq2_ans">
                            What's the learning experience like? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq2_ans" class="ans"></p>
                    </dd>
{/* faq 3 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq3_ans">
                            Who are the coaches? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq3_ans" class="ans"></p>
                    </dd>
{/* faq 4 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq4_ans">
                            How far in advance should we book? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq4_ans" class="ans"></p>
                    </dd>
{/* faq 5 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq5_ans">
                            Can you customize your courses? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq5_ans" class="ans"></p>
                    </dd>
{/* faq 6 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq6_ans">
                            Can you customize your courses? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq6_ans" class="ans"></p>
                    </dd>
{/* faq 7 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq7_ans">
                            Can you customize your courses? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq7_ans" class="ans"></p>
                    </dd>
{/* faq 8 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq8_ans">
                            Can you customize your courses? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq8_ans" class="ans"></p>
                    </dd>
{/* faq 9 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq9_ans">
                            Can you customize your courses? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq9_ans" class="ans"></p>
                    </dd>
{/* faq 10 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq10_ans">
                            Can you customize your courses? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq10_ans" class="ans"></p>
                    </dd>
{/* faq 11 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq11_ans">
                            Can you customize your courses? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq11_ans" class="ans"></p>
                    </dd>
{/* faq 12 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq12_ans">
                            Can you customize your courses? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq12_ans" class="ans"></p>
                    </dd>
{/* faq 13 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq13_ans">
                            Can you customize your courses? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq13_ans" class="ans"></p>
                    </dd>
{/* faq 14 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq14_ans">
                            Can you customize your courses? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq14_ans" class="ans"></p>
                    </dd>
{/* faq 15 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq15_ans">
                            Can you customize your courses? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq15_ans" class="ans"></p>
                    </dd>
                </dl>  

                </section>
            </div>
            <Subscribe/>
        </div>

    );
}

export default questions;