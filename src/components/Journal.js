import React, {Component} from 'react';
import NavMain from './NavMain';
import NavHome from './NavHome';
import Apply2 from "./images/apply2.png";
import JournalPic from "./images/journal.png";
import Journal1 from "./images/journal1.png";
import Journal2 from "./images/journal2.png";
import Journal3 from "./images/journal3.png";
import Subscribe from './Subscribe';
import ArrowUp from './ArrowUp';
import Footer from './Footer';

class Journal extends React.Component{
    render(){
        return(
            <div>
                <div className="content4">
                    <section className="HJ">
                        <h1>Journal</h1>
                        <button>CATEGORIES</button>
                    </section>
                    <section className="heroJ">
                        <img className="app_3" src={Apply2}/>
                        <div>
                            <a href="#">INSPIRATION</a>
                            <h3>Learn Design Thinking<br/>
                            like a Pro and Build<br/>
                            Projects that People<br/>
                            will care about</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit<br/>
                                sapien arcu vitae orci at molestie. Pharetra quisque donec<br/>
                                accumsan rhoncus risus. Urna magna turpis duis imperdiet<br/> 
                                elit, et, hendrerit viverra risus. Vulputate euismod commodo<br/>
                                donec tincidunt et, aliquam. Eget scelerisque netus habitant<br/>
                                dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper.<br/>
                                Lacus.
                            </p>
                            <div className="david"><img/> <p>David Mong, Apr 9, 2020</p></div>
                        </div>
                    </section>

                    <section className="journalofjournals">
                        <div className="journals">
                            <div>
                                <img src={JournalPic}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div>
                                <img src={Journal1}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div>
                                <img src={Journal2}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div>
                                <img src={Journal3}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div>
                                <img src={Journal}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div>
                                <img src={Journal1}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div>
                                <img src={Journal2}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div>
                                <img src={Journal3}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                        </div>
                        <button>LOAD MORE</button>      
                    </section>

                </div>
                <ArrowUp/>
                <Subscribe/>
            </div>

        );
    }
}
export default Journal;