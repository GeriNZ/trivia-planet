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


    // test('check the button call resetComponent()', () => {
    //      const button = component.find('Button');
    //      const instance = component.instance();
    //      button.simulate('click');
    //      instance.resetComponent();
    //      const spy = sinon.spy(instance, 'resetComponent');
    //      expect(spy.callCount).toBe(1);
    //      expect(spy.calledOnce).toBe(1);
    // });

});