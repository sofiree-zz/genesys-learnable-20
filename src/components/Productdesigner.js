import React, {Component} from 'react';
import NavMain from './NavMain';
import Cutout from "./images/Cutout 1.svg";
import Designer from "./images/designer.png";
import Subscribe from "./Subscribe";
import Footer from './Footer';

class Designers extends React.Component{
    render(){
        return(
            <div>
                <section className="content2">
                    <div className="des_con1">
                        <h2>
                            The<br/>
                            Learnable<br/>
                            Product Designer
                        </h2>
                        <div className="cut_out2">
                            <img src={Cutout}/>
                        </div>
                        
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
                   
                    <q>
                    “The greats weren’t great<br/>
                    because at birth they could<br/>
                    paint. The greats were<br/>
                    great because they painted a lot.” <br/>
                    - Macklemore
                    </q>

                    <div className="des_con2">
                        <div  className="des_">
                            <img src={Designer}/>
                        </div>
                        <h6>We expect you to...</h6>
                        <p className="p1">
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
                        <p className="p2">
                            To us, beauty without substance has no value. At Genesys, design thinkin and<br/>
                            execution are equally important, so we're constantly on the lookout for not only the<br/>
                            how but also the why.
                        </p>
                    </div>   
                </section>
                <Subscribe/>
            </div>
        );
    }
}
export default Designers;