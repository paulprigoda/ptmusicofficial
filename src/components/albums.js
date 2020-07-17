import React from 'react';
import './albums.css';

function Albums(props){
    return (
        <div id = "albumsquare">
            <div id = "albumname">
                <h3>{props.albumname}</h3>
                <a target="_blank" rel="noopener noreferrer" href={props.soundcloudlink}>Listen on Soundcloud</a>
            </div>
            <div id="albumartwork">
                <img id="albumpicture" src = {props.albumartwork} alt = "Artwork"></img>
            </div>
            <div id = "description">
                <p>{props.description}</p>
            </div>
        </div>
    )
};

export default Albums;