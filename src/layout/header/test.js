import Header from '.';
import logo from './logo.png';

describe('tests for header', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    test('it exists', () => {
        expect(wrapper).toExist;
    });

    test('it contains an h1', () => {
        const h1 = wrapper.find('h1');
        expect(h1.text()).toBe('Trivia Planet');
    });

    test('the image url is of the correct logo', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toEqual(logo);
    });

    test('checks Navbar exist', () => {
        const nav = wrapper.find('NavBar');
        expect(nav).toExist;
    });
});