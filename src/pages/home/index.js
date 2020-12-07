import React from 'react';
import './home.css';
import logo from './logo.png'


const Home = () => {
    return (
        
        <div>
            <img src={logo}/>
            <div id="home">
                <h1>Hello Challengers!</h1>
                <h2>Welcome to Planet Trivia </h2>
                <p>This is a multiplayer quiz app that you can enjoy with your friends!</p>
                <h2>How to play: </h2>
                <ul>
                    <li>Go to the game page</li>
                    <li>Select your options: </li>
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

