import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class PlayerForm extends React.Component{
    
    handlePlayers = (e) =>{
        e.preventDefault();
        console.log(e.target["exampleForm.PlayerSelect1"].value);
    }


    playerInput = (num) => {
        const playerForm = [];

        for(let i =1; i <= num; i++){
            playerForm.push(
                <Form.Group controlId={`exampleForm.PlayerSelect${i}`} key={i}>
                    <Form.Label>Enter {i} Player</Form.Label>
                    <Form.Control type="text" as="input" />
                </Form.Group>
            )
        }

        return playerForm;
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

export default PlayerForm;