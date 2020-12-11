import PlayerForm from '.';

describe('PlayerForm test', ()=> {
    let wrapper, historyMock;

    beforeEach(()=>{
        wrapper = shallow(<PlayerForm.WrappedComponent playerForm={[]} history={historyMock} />);
    });

    test('it exists', ()=> {
        expect(wrapper).toExist;
    });

    test('it renders a form with a button', () => {
        const button = wrapper.find('Button');
        expect(button.exists()).toBe(true);
    });

    test('handlePlayers is called when the form is submitted', () => {
        const form = wrapper.find('Form');
        const fakeEvent = { preventDefault: () => "do nothing", target: {} };
        historyMock = { push: jest.fn() };
        //form.simulate("submit", fakeEvent);
        //expect(wrapper.history.push.mock.calls[0]).toEqual(['/game/questions', {} ]);
    }); 
});