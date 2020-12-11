import React from 'react';
import './home.css';
import thinkingMan from './thinkingMan.png'




const Home = () => {
    return (
        
        <div id="homeContainer">
            <img id="thinkerImg"src={thinkingMan} alt="statue of a thinker man"/>
            <div id="home">
                <h1>Hello Challengers!</h1>
                <h2>Welcome to Trivia Planet</h2>
                <p>This is a multiplayer quiz app that you can enjoy with your friends!</p>
                <h2>How to play: </h2>
                <p>Go to the game page and select your options:</p>
                
                <ul>
                    <li>Enter your number of players</li>
                    <li>Select your number of questions</li>
                    <li>Choose your favourite topic</li>
                    <li>Set your difficulty</li>
                </ul>
                <p>Are you ready for some hard questions??</p>
            </div>
         </div>
    )
}

export default Home;

