import React from 'react';
import { connect } from 'react-redux';
import { getResult } from '../../actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import PlayerForm from '../playerForm';

class ApiForm extends React.Component{

    handleApiform = (e) =>{
        e.preventDefault();
        this.props.getResult({
            amount: e.target["exampleForm.ControlSelect1"].value,
            category:e.target["exampleForm.ControlSelect2"].value,
            difficulty:e.target["exampleForm.ControlSelect3"].value,
            type: e.target["exampleForm.ControlSelect4"].value,
            numOfPlayers: parseInt(e.target["exampleForm.ControlSelect5"].value)
        });
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleApiform}>
                        
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select your number of questions</Form.Label>
                            <Form.Control as="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Choose your favourite topic</Form.Label>
                            <Form.Control as="select">
                            <option value="9">general knowledge</option>
                            <option value="18">science computers</option>
                            <option value="27">animals</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect3">
                            <Form.Label>Set your difficulty</Form.Label>
                            <Form.Control as="select">
                            <option value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect4">
                            <Form.Label>Select type</Form.Label>
                            <Form.Control as="select">
                            <option value="boolean">True / False</option>
                            <option value="multiple">multiple</option>
                            
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect5">
                            <Form.Label>Number of Players</Form.Label>
                            <Form.Control as="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit </Button>
                </Form>
                {this.props.numOfPlayers && <PlayerForm players={this.props.numOfPlayers}/>}
            </>
        );
    }
}

const mSTP = (state)=>({
    numOfPlayers: state.numOfPlayers,
    loading: state.loading
  })

export default connect(mSTP, { getResult })(ApiForm);