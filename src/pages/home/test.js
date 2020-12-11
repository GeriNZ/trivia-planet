import Home from '.';
import thinkingMan from './thinkingMan.png'

describe('tests for home', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home />);
    });

    test('it exists', () => {
        expect(wrapper).toExist;        
    });

    test('it contains an img element', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toEqual(thinkingMan);
    });

    test('it contains a div with an id of homeContainer', () => {
        const div = wrapper.find('div').first()
        expect(div.prop('id')).toEqual('homeContainer');
    });
});