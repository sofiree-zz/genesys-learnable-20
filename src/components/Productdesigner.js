import React from 'react';
import NavMain from './NavMain';
import Cutout from "./images/Cutout 1.svg";
import Designer from "./images/designer.png";
import Subscribe from "./Subscribe";
import Footer from './Footer';

const designer=()=>{
    return(
        <div>
            <section class="content2">
                <div>
                <img src={Cutout}/>
                </div>
                <h2>The Learnable Product Designer</h2>
                <p>
                At Genesys, you'll be exposed to every discipline in our creative process – UX, 
                UI, interaction design, and copywriting. You’ll be part of a dynamic team that's made up of like-minded, 
                talented people. You'll work hard with them to create things that will amaze everyone everywhere.<br/>
                <br/>
                In addition to your team projects, you’ll be lending a hand to the creative team. 
                Participating in brainstorm sessions, building winning pitches, preparing assets, 
                and design scriptures for productions, you'll be in the thick of it all.<br/>
                <br/>
                Oh, and you’ll make amazing friends while you're at it!               
                </p>
                <q>
                “The greats weren’t great because at birth they could paint. 
                The greats were great because they painted a lot.” - Macklemore
                </q>
                <img src={Designer}/>
                <h6>We expect you to...</h6>
                <p>
                Play nice with other people.Be an actively engaging person. 
                That means you are present, motivated, and social. 
                You know how to communicate effectively with your teammates.
                Love to code. You understand the basics of programming and object-oriented design and development.
                Have an eye for detail. Your keen observation helps you catch discrepancies 
                and fix them quickly.<br/>
                <br/>
                Be innately curious. Your love for technology is insatiable, 
                so you’re always researching and experimenting. 
                Learning new technical skills while on the job is something you look forward to.<br/>
                <br/>
                Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing.
                </p>
            </section>
            <Subscribe/>
        </div>

    );
}

export default designer;