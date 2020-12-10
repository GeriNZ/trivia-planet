import Quiz from '.'

describe('Quiz test', ()=>{
    let component, mockFunction;

    beforeEach(()=>{
        mockFunction = jest.fn()
        component = shallow(<Quiz.WrappedComponent 
                setScore = {mockFunction}
                correctAnswer = {"true"}
                incorrectAnswers = {["false"]}
                players = {{tom: 0}}
            />);
    })

    test('it exists', ()=>{

        expect(component).toExist;
    });
});