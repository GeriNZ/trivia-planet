import * as triviaActions from '.';

describe('actions', () => {
    let action;
    describe('getResult', () => {
        test('returns an action object with type PLAYER_NUMBER and payload of player number', () => {
            action = triviaActions.numOfPlayers(3);
            expect(action).toEqual({ type: "PLAYER_NUMBER", payload: 3 });
        });
    });

    describe('resetPlayerNum', () => {
        test('returns an action object with type RESET_PLAYER and payload of player number', () => {
            action = triviaActions.resetPlayer();
            expect(action).toEqual({ type: "RESET_PLAYER"});
        });
    });

    describe('getNames', () => {
        test('returns an action object with type PLAYER_NAME and payload of player number', () => {
            action = triviaActions.createPlayer('Bob');
            expect(action).toEqual({ type: "PLAYER_NAME", payload: 'Bob' });
        });
    });

    describe('setScore', () => {
        test('returns an action object with type SCORE_SET and payload of player number', () => {
            action = triviaActions.scoreIncrement('Richard');
            expect(action).toEqual({ type: "SCORE_SET", payload: 'Richard' });
        });
    });

    describe('loadResult', () => {
        test('returns an action object with type LOAD_RESULT and payload of player number', () => {
            const requestedQuiz = {
                // amount: '1',
                category: "Animals",
                type: "multiple",
                difficulty: "medium",
                question: "What are rhino&#039;s horn made of?",
                correct_answer: "Keratin",
                incorrect_answers: ["Bone","Ivory","Skin"]
            }
            action = triviaActions.loadResult(requestedQuiz);
            expect(action).toEqual({
                 type: "LOAD_RESULT",
                 payload: {
                    category: "Animals",
                    type: "multiple",
                    difficulty: "medium",
                    question: "What are rhino&#039;s horn made of?",
                    correct_answer: "Keratin",
                    incorrect_answers: ["Bone","Ivory","Skin"]
                    }
            });
        });
    });
});

describe('fetchData with thunk', () => {
    test('triggers loadResult on successful fetch', async () => {
        let dispatch = jest.fn()
        let fakeResponse = { "results": 
            [{
            "category": "Animals",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What are rhino&#039;s horn made of?",
            "correct_answer": "Keratin",
            "incorrect_answers": ["Bone","Ivory","Skin"]
            }]
        };
        fetch.mockResponse(JSON.stringify(fakeResponse))
        let spy = sinon.spy(triviaActions, 'loadResult')
        spy = triviaActions.loadResult;
        await triviaActions.fetchData(dispatch);
        expect(spy.callCount).toEqual(1);
    });
});