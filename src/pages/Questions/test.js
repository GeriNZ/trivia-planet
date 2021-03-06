import { default as Questions, mSTP } from '.'

describe('tests the Questions', () => {
    let wrapper, randomQuestionMock;

    beforeEach(() => {
        randomQuestionMock = jest.fn();
        wrapper = shallow(<Questions.WrappedComponent 
            numOfPlayers={1}
            players={{}}
            quiz={[]}
            resetPlayerNum={randomQuestionMock}
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

    test('it renders winner component on questionRender false', () => {
        wrapper.setState({questionRender: false});
        const instance = wrapper.instance();
        const resetComponent = jest.fn()
        wrapper.setProps({ players: { bob: 0 }, resetComponent: instance.resetComponent});
        expect(wrapper.find('Winner').props('players')).toEqual({players: {bob: 0}, resetComponent: instance.resetComponent});
    });

    test('will check the length of renderQuestion', () => {
        const instance = wrapper.instance();
        expect(instance.renderQuestion()).toEqual([]);
    });

    test('checkWinner changes questionRender to false and renders the Winner component after click', () => {
        const form = wrapper.find('Form');
        const fakeEvent = { preventDefault: () => "do nothing" };
        form.simulate("submit", fakeEvent);
        expect(wrapper.state('questionRender')).toBe(false);
        expect(wrapper.state('whichComponent')).toBe('Winner');
    });

    test('resetComponent function is called', () => {
        const instance = wrapper.instance();
        wrapper.setState({ questionRender: false})
        wrapper.setProps({history: []});
        const spy = sinon.spy(instance, 'resetComponent');
        instance.resetComponent();
        expect(wrapper.state('questionRender')).toBe(true);
        //console.log(wrapper.props().children.props)
        //expect(wrapper.props.value.location.pathname).toBe('/game');
        expect(spy.callCount).toBe(1);

    });
});

describe('mapStateToProps', () => {
    test('it returns an object with 3 keys', () => {
        const stateStub = { numOfPlayers: 0, players: {}, quiz: [] };
        expect(Object.keys(mSTP(stateStub)).length).toBe(3);
    });
});
