import React, {Component} from 'react';
import NavMain from './NavMain';
import NavHome from './NavHome';
import Cutout from "./images/Cutout 1.svg";
import Designer from "./images/designer.png";
import Subscribe from "./Subscribe";
import Footer from './Footer';
import ArrowUp from './ArrowUp';

class ProductDesigner extends React.Component{
    render(){
        return(
            <div>
                <section className="hood" >
                    <div className="content">
                        <div className="dev_con1">
                            <div className="dev_note">
                                <h5>
                                    The<br/>
                                    Learnable<br/>
                                    Product Designer
                                </h5>

                                <p>
                                    At Genesys, you'll be exposed to every discipline in our creative<br/>
                                    process – UX, UI, interaction design, and copywriting. You’ll be<br/>
                                    part of a dynamic team that's made up of like-minded, talented<br/>
                                    people. You'll work hard with them to create things that will<br/>
                                    amaze everyone everywhere.<br/>
                                    <br/>
                                    In addition to your team projects, you’ll be lending a hand to the<br/>
                                    creative team. Participating in brainstorm sessions, building<br/>
                                    winning pitches, preparing assets, and design scriptures for<br/>
                                    productions, you'll be in the thick of it all.<br/>
                                    <br/>
                                    Oh, and you’ll make amazing friends while you're at it!               
                                </p>
                            </div>

                            <div className="cut_out2">
                                <img src={Cutout}/>
                            </div>
                        </div>
                        <div className="quote1">
                            <q>
                                “The greats weren’t great<br/>
                                because at birth they could<br/>
                                paint. The greats were<br/>
                                great because they painted a lot.” <br/>
                                - Macklemore
                            </q> 
                        </div>

                        

                        
                            <div  className="des_">
                                    <img src={Designer}/>
                            </div>

                            <div className="dev_note_3">
                                <h6>We expect you to...</h6>
                                
                                <div className="p1">
                                    <p >
                                        Play nice with other people.<br/>
                                        <br/>
                                        Be an actively engaging person. That means you are present,<br/>
                                        motivated, and social.<br/>
                                        <br/>
                                        Understand how to use Figma design software<br/>
                                        <br/>
                                        Be able to create initial design layouts with confidence and<br/>
                                        know-how to effectively communicate concepts to everyone on<br/>
                                        your team.<br/>
                                        <br/>
                                        Have a basic understanding of design principles and theories<br/>
                                        To have courage. This is a tough industry, only the brave<br/>
                                        and sturdy remain.<br/>
                                        <br/>
                                        Be prepared to defend your decisions and take constructive<br/>
                                        criticism.
                                    </p>
                                </div>

                                <div className="p2">
                                    <p >
                                        To us, beauty without substance has no value. At Genesys, design thinkin and<br/>
                                        execution are equally important, so we're constantly on the lookout for not only the<br/>
                                        how but also the why.
                                    </p>
                                </div>            
                            </div>                                       
                    </div>
                </section>
                <ArrowUp/>
                <Subscribe/>
            </div>
        );
    }
}
export default ProductDesigner;