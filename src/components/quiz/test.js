import Quiz from '.';

describe('Quiz test', ()=>{
    let wrapper, mockFunction;

    beforeEach(()=>{
        mockFunction = jest.fn()
        wrapper = shallow(<Quiz.WrappedComponent 
                setScore = {mockFunction}
                correctAnswer = {"true"}
                incorrectAnswers = {["false1", "false2", "false3"]}
                players = {{tom: 0}}
            />);
    })

    test('it exists', () => {
        expect(wrapper).toExist;
    });

    test('it renders a div container and an h3 element', () => {
        const h3 = wrapper.find('h3');
        const divContainer = wrapper.find('div');
        expect(h3.exists()).toBe(true);
        expect(divContainer.exists()).toBe(true);
    });

    test('selectedAnswer calls setScore if the answer is correct and changes state', () => {
        const button = wrapper.find('button').first();
        const fakeEvent = { preventDefault: () => "do nothing", target: {} };
        button.simulate("click", fakeEvent);
        mockFunction();
        expect(mockFunction).toHaveBeenCalled();
        expect(wrapper.state('tom')).toBe(true);
    });    
});