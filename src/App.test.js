import App from './App.js';

describe('App', () => {
    let component;
    
    beforeEach(() => {
        component = shallow(<App />);
    });

    test('it renders', () => {        
        expect(component).toExist;
    });

    test('checks components exist', () => {
        const header = component.find('Header');
        const footer = component.find('Footer');
        const switcher = component.find('Switch');
        expect(header.exists()).toBe(true);
        expect(footer.exists()).toBe(true);
        expect(switcher.exists()).toBe(true);
    });

    test('number of routers', () => {
        let routerSwitch = component.find('Switch')
        expect(routerSwitch.length).toBe(1);
        const router = component.find('Route');
        expect(router).toHaveLength(3);
    });
});