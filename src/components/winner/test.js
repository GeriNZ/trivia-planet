import Winner from '.';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


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
        console.log(component);
        expect(component).toExist;
    }); 

    test('checks components exist', () => {
        const button = component.find('Button');
        const divContainer = component.find('div')
        expect(button.exists()).toBe(true);
        expect(divContainer.exists()).toBe(true);
    });


    // test('check button click', () =>{
    //     const button = component.find('Button');
        
    // });

});