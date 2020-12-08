// const loading = () => ({
//     type: 'LOADING'
// });

const numOfPlayers = num => ({
    type: 'PLAYER_NUMBER',
    payload: num
});

const loadResult = (data)=>({
    type: 'LOAD_RESULT',
    payload: data
});

const createPlayer = name => ({
    type: 'PLAYER_NAME',
    payload: name

});

export const getResult = formInput =>{
    return async dispatch =>{
        dispatch(numOfPlayers(formInput.numOfPlayers));
        try{
            const res = await fetchData(formInput);
            dispatch(loadResult(res));
        }catch(err){
            console.log(err.message);
        }
    }
}

export const getNames = name => {
    return async dispatch => {
        dispatch(createPlayer(name));
    }
}

const fetchData = async formInput => {
    try{
        const res = await fetch(`https://opentdb.com/api.php?amount=${formInput.amount}&category=${formInput.category}&difficulty=${formInput.difficulty}&type=${formInput.type}`);
        const data = await res.json();
        return data.results.map(quiz => ({
            question: quiz.question,
            correct_answer: quiz.correct_answer,
            incorrect_answers: quiz.incorrect_answers
        }))
    }catch(err){
        console.log(err.message);
    }
}
