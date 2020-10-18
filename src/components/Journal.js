import React, {Component} from 'react';
import NavMain from './NavMain';
import NavHome from './NavHome';
import Apply3 from "./images/apply3.png";
import DavidMong from "./images/davidmong.png";
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
                        <div className="heading_">
                        <h1>Journal</h1>
                        </div>
                        <div className="button_">
                        <button>CATEGORIES</button>
                        </div>
                        
                    </section>
                    <section className="heroJ">
                        <img className="app_3" src={Apply3}/>
                        <div className="inspiration">
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
                            <div className="david">
                                <img src={DavidMong}/> 
                            <p>David Mong, Apr 9, 2020</p></div>
                        </div>
                    </section>

                    <section className="journalofjournals">
                        <div className="journals_">
                            <div className="journ">
                                <img src={JournalPic}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div className="journ">
                                <img src={Journal1}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div className="journ"> 
                                <img src={Journal2}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div className="journ">
                                <img src={Journal3}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div className="journ">
                                <img src={JournalPic}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div className="journ">
                                <img src={Journal1}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div className="journ">
                                <img src={Journal2}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                            <div className="journ">
                                <img src={Journal3}/>
                                <h6>INSPIRATION</h6>
                                <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                                <p>David Mong, Apr 9, 2020</p>
                            </div>
                             
                        </div>
                        <button className="loadbutton">LOAD MORE</button> 
                    </section>

                </div>
                <ArrowUp/>
                <Subscribe/>
            </div>

        );
    }
}
export default Journal;