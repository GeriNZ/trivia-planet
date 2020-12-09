import { default as Questions, mSTP } from '.'

describe('tests the Questions', () => {
    let wrapper, randomQuestionMock;

    beforeEach(() => {
        randomQuestionMock = jest.fn();
        wrapper = shallow(<Questions.WrappedComponent 
            numOfPlayers={1}
            players={{}}
            quiz={[]}
            />)
    });

    test('it exists', () => {
        expect(wrapper).toExist;
    });

    test('it renders quiz form on questionRender true', () => {
        wrapper.setState({questionRender: true});
        expect(wrapper.find('h1').text()).toContain('Quiz Time!');
        expect(wrapper.find('Button').text()).toContain('Submit answers');
    });

    // test('it renders winner component on questionRender false', () => {
    //     wrapper.setState({questionRender: false});
    //     wrapper.setProps({ players: { bob: 0 }})
    //     expect(wrapper.find('Winner').props('players')).toContain({players: {bob: 0}});
    // });
});