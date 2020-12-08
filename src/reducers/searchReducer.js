const initialState = {
    // amount: '1',
    // category: '9',
    // difficulty: 'easy',
    // type: 'multiple',
    numOfPlayers: '',
    quiz: [],
    loading: false
};

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            return {...state, loading: !state.loading};
        case 'PLAYER_NUMBER':
            return {...state, numOfPlayers: action.payload}
        case 'LOAD_RESULT':
            return {...state, quiz: action.payload};
        default:
            return state;
    };
};

export default searchReducer;