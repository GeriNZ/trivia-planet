import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setScore } from '../../actions';
import { connect } from 'react-redux';

class Quiz extends Component {

    
    getShuffled = () => {
        const allAnswers = [this.props.correctAnswer, ...this.props.incorrectAnswers];
        let j, x;
        j = Math.floor(Math.random() * (allAnswers.length));
        x = allAnswers[0];
        allAnswers[0] = allAnswers[j];
        allAnswers[j] = x;
        return allAnswers
    }

    selectedAnswer = e => {
        e.preventDefault();
        console.log(e.target.value)
        if (e.target.value === this.props.correctAnswer){
            this.props.setScore('Bob')            
        }
        e.target.disabled = true;
    }
    
    shuffledAnswers = this.getShuffled();
    renderButtons = () => {
        let buttonsArray = this.shuffledAnswers.map((ans, i) => <button key={i} onClick={this.selectedAnswer} value={ans} disabled={false}>{ans}</button>)
        return buttonsArray
    }

    render() {
        return (
            <>
                <form>
                <h4>{this.props.questions}</h4>
                {this.renderButtons()}
                    <input type="submit" value="Submit answers" />
                </form>
            </>
        )
    }
}



export default connect(null, { setScore })(Quiz);