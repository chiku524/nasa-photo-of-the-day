import React from 'react';

function NavBar(){
    return (
        <div className='navBarContainer'>
            <span role='img' aria-label='rocketship'>🚀</span>
            <div className='anchorTags'>
                <a href='https://www.nasa.gov/'>Home</a>
                <a href='https://www.nasa.gov/missions'>Missions</a>
                <a href='https://www.nasa.gov/socialmedia'>Social Media</a>
                <a href='https://www.nasa.gov/about/index.html'>About</a>
            </div>
        </div>
    );
}


export default NavBar;