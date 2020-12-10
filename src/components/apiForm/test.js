import { default as ApiForm, mSTP } from '.'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// describe('tests the Questions', () => {
//     let wrapper, handlerMock;

//     beforeEach(() => {
//         handlerMock = jest.fn();
//         wrapper = shallow(<ApiForm.WrappedComponent />)
//     });

//     test('it exists', () => {
//         expect(wrapper).toExist;
//     });

//     test('Form has nested Form groups and a button', () => {
//         let mainForm = wrapper.find('Form');
//         let formGroups = wrapper.find('Form.Group');
//         console.log(formGroups);
//         let playButton = wrapper.find('Button');
//         expect(mainForm.length).toBe(1);
//         expect(playButton.length).toBe(1);
//         // expect(formGroups.length).toBe(5);
//     });

//     test('handleApiform calls getResult after click', () => {
//         const form = wrapper.find('Form');
//         const fakeEvent = { preventDefault: () => "do nothing" };
//         form.simulate("submit", fakeEvent);
//         expect(handlerMock).toHaveBeenCalled();
//     });
// });

// describe('mapStateToProps', () => {
//     test('it returns an object with 3 keys', () => {
//         const stateStub = { numOfPlayers: 0, loading: true }
//         expect(Object.keys(mSTP(stateStub)).length).toBe(4);
//     });
// });