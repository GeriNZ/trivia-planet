import React from 'react';
import Button from 'react-bootstrap/Button';

class Winner extends React.Component{

    displayScore = () => {
        const sortedScore = this.sortScore();

        const playerElement = sortedScore.map((pair,idx) => {
            return (<p key={idx}>{pair[0]}: {pair[1]} points</p>)
        })

        return playerElement;
    };

    displayWinner = () => {
        const sortedScore = this.sortScore();
        return sortedScore[0][0];
    };

    sortScore = () => {
        const playerArr = [];
        for(const player in this.props.players){
            playerArr.push([player, this.props.players[player]]);
        };
        
        playerArr.sort((a, b) => b[1] - a[1]);
        
        return playerArr;
    }

    render() {
        return (
            <div className="winnerContainer">
                <h3>The winner is: {this.displayWinner()}</h3>
                {this.displayScore()}
                <Button onClick={this.props.resetComponent}>Play Again</Button>
            </div>
        );
    }
}

export default Winner;