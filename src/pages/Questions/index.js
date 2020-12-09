import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Quiz from '../../components/Quiz';

class Questions extends React.Component {

    renderQuestion = () => this.props.quiz.map( (q, i) => {
    return <Quiz key={i} questions={q.question} correctAnswer={q.correct_answer} incorrectAnswers={q.incorrect_answers} players={this.props.players}/>}) 



    render() {
        console.log(this.props.players)
        return ( 
            <div>
                <h1>Quiz Time!</h1>
                <div>{this.renderQuestion()}</div>
            </div>
        )  
    }
}

const mSTP = state => ({
    numOfPlayers: state.numOfPlayers,
    players: state.players,
    quiz: state.quiz
  })

export default connect(mSTP)(Questions);