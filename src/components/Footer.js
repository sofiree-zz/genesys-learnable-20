import React from 'react';
// import FaceBookLogo from 'images/facebookVector.svg';
// import TwitterLogo from 'images/twitterVector.svg';
// import LinkedinLogo from 'images/linkedin 1vec.svg';
// import InstagramLogo from 'images/instagram 1vec.svg';
// import YoutubeLogo from 'images/youtube-logotype.svg';
// import VimeoLogo from 'images/vimeo 1vec.svg';

const footer = () => {
    return(
        <footer className="footer_">
                <a href="#">BUILD SOFTWARE</a>
                <a href="#">DESIGN DIFFERENT</a>
                <a href="#">APPLY YOUR KNOWLEDGE</a>
                <a href="#">FAQ</a>

                <img id="footer_img" src="todevstud.png" alt=""/>

                <p>
                    Learnable is proud to be a collaborative
                    effort of all the arms of our product team
                </p>

                <a href="#" >HEAD TO DEVSTUDIO</a>

                <p>
                    Our Local campus center: Kilometer 7,
                    Enugu/Port Harcourt, Expressway,
                    Centenary City, Enugu, Nigeria.
                </p>

                <a href="#" >GET IN TOUCH</a>

                <div>
                    <img src="src/images/facebookVector.svg"/>
                    <img src="src/images/instagram 1vec.svg"/>
                    <img src="src/images/linkedin 1vec.svg"/>
                    <img src="src/images/twitterVector.svg"/>
                    <img src="src/images/youtube-logotype.svg"/>
                    <img src="src/images/vimeo 1vec.svg"/>
                </div>
            </footer>
    );
}

export default footer;