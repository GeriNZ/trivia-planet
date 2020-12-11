import Winner from '.';
import Button from 'react-bootstrap/Button';
import { shallow } from 'enzyme';

describe('Winner', () => {
    let component, mockFunction; 
    
    beforeEach(() => {
        mockFunction = jest.fn();
        component = shallow(<Winner 
                players = {{tom: 0}}
                resetComponent = {mockFunction}
            />);
    });

    test('it renders', () => {        
        expect(component).toExist;
    }); 

    test('checks children components exist', () => {
        const button = component.find('Button');
        const divContainer = component.find('div');
        expect(button.exists()).toBe(true);
        expect(divContainer.exists()).toBe(true);
    });

    test('check button click', ()=>{
        const button = component.find('Button').first();
        const fakeEvent = { preventDefault: ()=> 'do nothing', target: {}};
        button.simulate('click', fakeEvent);
        mockFunction();
        expect(mockFunction).toHaveBeenCalled();
    });

});