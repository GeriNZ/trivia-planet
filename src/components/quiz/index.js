import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setScore } from '../../actions';
import { connect } from 'react-redux';

class Quiz extends Component {

    state ={};
    
    getShuffled = () => {
        const allAnswers = [this.props.correctAnswer, ...this.props.incorrectAnswers];
        let j, x;
        j = Math.floor(Math.random() * (allAnswers.length));
        x = allAnswers[0];
        allAnswers[0] = allAnswers[j];
        allAnswers[j] = x;
        return allAnswers
    }

    selectedAnswer = (e, player) => {
        e.preventDefault();
        if (e.target.value === this.props.correctAnswer){
            this.props.setScore(player)            
        }
<<<<<<< HEAD
        e.target.disabled = true;
        
=======
        this.setState({
            [player]: true
        })
>>>>>>> 76795533c369e67bd89b338a8724f1f7f79b2666
    }
    
    shuffledAnswers = this.getShuffled();

    renderPlayersAnswers = () =>{
        const playerArray = []
        for(const player of Object.keys(this.props.players)){
            playerArray.push(this.renderButtons(player));
        };
        return playerArray;
    }

    componentDidMount(){
        for(const player of Object.keys(this.props.players)){
            this.setState({
                [player]: false
            });
        }
    }


    renderButtons = player => {
        let buttonsArray = this.shuffledAnswers.map((ans, i) => <button key={i} disabled={this.state[player]} onClick={(e)=>this.selectedAnswer(e, player)} value={ans}>{ans}</button>);
            return (<div key={player} id={player}><h4>{player}</h4>{buttonsArray}</div>);
    }

    render() {
        return (
            <>
<<<<<<< HEAD
                <form>
                    <h4>{this.props.questions}</h4>
                    {this.renderButtons()}
                    <input type="submit" value="Submit answers" />
                </form>
=======
                <div>
                    <h3>{this.props.questions}</h3>
                    {this.renderPlayersAnswers()}
                </div>
>>>>>>> 76795533c369e67bd89b338a8724f1f7f79b2666
            </>
        )
    }
}



export default connect(null, { setScore })(Quiz);