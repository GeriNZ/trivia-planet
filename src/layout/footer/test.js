import Footer from '.';

describe('tests the footer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />)
    });

    test('it exists', () => {
        expect(wrapper).toExist;
    });

    test('the footer copyright should be correct', () => {
        const names = wrapper.find('#footer');
        expect(names.text()).toEqual('© Trivia Planet 2020 | Developed by Raj, Paola, Geraldine, Charan and Dragos');
    });
    
    test('number of p elements', () => {
        const pElement = wrapper.find('p');
        expect(pElement).toHaveLength(1);
    });
});