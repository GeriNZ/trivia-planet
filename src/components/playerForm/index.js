import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getNames } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PlayerForm extends React.Component{
    
    handlePlayers = (e) =>{
        e.preventDefault();
        this.playerForm.forEach( input => this.props.getNames(e.target[input.props.controlId].value));
        this.props.history.push('/game/questions')
    }
    
    playerForm = [];

    playerInput = (num) => {

        for(let i =1; i <= num; i++){
            this.playerForm.push(
                <Form.Group controlId={`exampleForm.PlayerSelect${i}`} key={i}>
                    <Form.Label>Enter {i} Player</Form.Label>
                    <Form.Control type="text" as="input" />
                </Form.Group>
            )
        }

        return this.playerForm;
    }

    render() {
        return (
            <Form onSubmit={this.handlePlayers}>
                {this.playerInput(this.props.players)}
            
            <Button variant="primary" type="submit">Submit </Button>
            </Form>
        );
    }
}

export default connect(null, { getNames })(withRouter(PlayerForm));