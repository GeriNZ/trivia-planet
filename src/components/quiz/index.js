import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Quiz extends Component {
    render() {
        return (
            <h3>{this.props.questions}</h3>
        )
    }
}

export default Quiz;