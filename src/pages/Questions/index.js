import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { resetPlayerNum } from '../../actions'
import Quiz from '../../components/Quiz';
import Winner from '../../components/Winner'
import { withRouter } from 'react-router-dom';

class Questions extends React.Component {
    
    state = {
        questionRender: true,
        whichComponent: "Form"
    }

    renderQuestion = () => this.props.quiz.map( (q, i) => {
        return <Quiz key={i} questions={q.question} correctAnswer={q.correct_answer} incorrectAnswers={q.incorrect_answers} players={this.props.players}/>
    }) 


    checkWinner = e => {
        e.preventDefault();
        this.setState({
            questionRender: false,
            whichComponent: "Winner"
        })
    };

    resetComponent = () => {
        this.setState({questionRender: true});
        this.props.resetPlayerNum();
        this.props.history.push('/game');
    };

    render() {
        return ( 
            <>
            {this.state.questionRender ? 
                (<Form onSubmit={this.checkWinner}>
                    <h1>Quiz Time!</h1>
                    <div>{this.renderQuestion()}</div>
                    <Button variant="primary" type="submit">Submit answers</Button>
                </Form>) : 
                (<Winner players={this.props.players} resetComponent={this.resetComponent}/>)}
            </>
        )  
    }
}

export const mSTP = state => ({
    numOfPlayers: state.numOfPlayers,
    players: state.players,
    quiz: state.quiz
  })

export default connect(mSTP, { resetPlayerNum })(withRouter(Questions));