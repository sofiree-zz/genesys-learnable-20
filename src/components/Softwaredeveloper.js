import React from 'react';
import NavMain from './NavMain';
import Navhome from './Navhome';
import Cutout from "./images/Cutout 1.svg";
import Dev from "./images/devphoto.png";
import Subscribe from "./Subscribe";
import Footer from './Footer';

const software=()=>{
    return(
        <div>
           
            <section class="content">
                <div>
                <img src={Cutout}/>
                </div>
                <h2>The Learnable Software developer</h2>
                <p>
                Creativity means a lot to us. So we look for 
                people who can think both logistically and artistically, 
                and who know that limits are made to be pushed. 
                We value skill and aptitude, but we honor those who care 
                about working with their team to add the Genesys flavour to every project.<br/>
                <br/> 
                As a developer, being part of the team exposes 
                you to a range of diverse, like-minded talented 
                people who are sure to make the experience fun for you. 
                You’ll get a shot at building amazing things, 
                developing yourself, learning on the job, 
                while exchanging healthy jokes and having random hangouts once in a while.
                </p>
                <q>
                “You are someone people can count on. Every day, 
                you come in ready to make great things happen.” 
                </q>
                <img src={Dev}/>
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

export default software;