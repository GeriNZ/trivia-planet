import React from 'react';
import { connect } from 'react-redux';
import { getResult } from '../../actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class ApiForm extends React.Component{
    render() {
        return (
            <>
                <h1>{this.props.loading ? "loading" : "error"}</h1>
                <button onClick={this.handler}>change to true</button>
                
                <Form>
                        
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select your number of questions</Form.Label>
                            <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Choose your favourite topic</Form.Label>
                            <Form.Control as="select">
                            <option>general knowledge 9</option>
                            <option>science computers 18</option>
                            <option>animals 27</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Set your difficulty</Form.Label>
                            <Form.Control as="select">
                            <option>easy</option>
                            <option>medium</option>
                            <option>hard</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select type</Form.Label>
                            <Form.Control as="select">
                            <option>True / False</option>
                            <option>multiple</option>
                            
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit </Button>
                </Form>

            </>
        );
    }
}

const mSTP = (state)=>({
    loading: state.loading
  })

export default connect(mSTP, { getResult })(ApiForm);