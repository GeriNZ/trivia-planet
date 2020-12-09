import React from 'react';
import NavBar from '../../components/navbar';
import logo from './logo.png';
import './style.css';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <img className="logoImg" src={logo}/>
                <Jumbotron>
                <h1>Trivia Planet</h1>
                </Jumbotron>
                <NavBar />
                
            </div>
        );
    }
}

export default Header;
