import React from 'react';
import NavBar from '../../components/navbar';
import logo from './logo.png';
import './style.css';

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <img className="logoImg" src={logo}/>
                <h3>Trivia Planet</h3>
                <NavBar />
            </div>
        );
    }
}

export default Header;
