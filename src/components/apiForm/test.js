import { default as ApiForm, mSTP } from '.'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

describe('tests the Questions', () => {
    let wrapper, handlerMock;

    beforeEach(() => {
        handlerMock = jest.fn();
        wrapper = shallow(<ApiForm.WrappedComponent getResult={handlerMock}/>)
    });

    test('it exists', () => {
        expect(wrapper).toExist;
    });

    test('Form has nested Form groups and a button', () => {
        let mainForm = wrapper.find('Form');
        let formGroups = wrapper.find(Form.Group);
        let playButton = wrapper.find('Button');
        expect(mainForm.length).toBe(1);
        expect(playButton.length).toBe(1);
        expect(formGroups.length).toBe(5);
    });

    test('handleApiform calls getResult after click', () => {
        const form = wrapper.find('Form');
        const fakeEvent = {
            preventDefault: () => "do nothing",
            target: {
                "exampleForm.ControlSelect1": 0,
                "exampleForm.ControlSelect2": 1,
                "exampleForm.ControlSelect3": 2,
                "exampleForm.ControlSelect4": 3,
                "exampleForm.ControlSelect5": 4
            },                
                    
        };
        form.simulate("submit", fakeEvent);
        expect(handlerMock).toHaveBeenCalled();
    });
});

describe('mapStateToProps', () => {
    test('it returns an object with 2 keys', () => {
        const stateStub = { numOfPlayers: 0, loading: true }
        expect(Object.keys(mSTP(stateStub)).length).toBe(2);
    });
});