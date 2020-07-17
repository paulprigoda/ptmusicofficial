import React from 'react';
import './landing.css';

function Landing(props){
    return(
        <div id="landingsqure">
            <div id="landingtextsocials">
            <div id="landingtext">
                <h1>PT MUSIC OFFICIAL</h1>
                <h2>Artist | Producer</h2>
            </div>
                <div id="socials">
                    <div id = "insta">
                        <a target="_blank" rel="noopener noreferrer"  href={props.instagram}>
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div id = "youtube">
                        <a target="_blank" rel="noopener noreferrer"  href={props.tiktok}>
                            <i class="fab fa-youtube" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div id = "twitter">
                        <a target="_blank" rel="noopener noreferrer"  href={props.twitter}>
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div id = "face">
                        <a target="_blank" rel="noopener noreferrer"  href={props.facebook}>
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                    </div>
                {/*Make a button to click that when held it increases until hits random number than resets,
                goal of game is to get highest number without pulling off*/}
                </div>
            </div>
            <div id="landingimage">
            </div>
        </div>
    )
};

export default Landing;