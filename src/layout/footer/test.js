import Footer from '.';

describe('tests the footer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />)
    });

    test('it exists', () => {
        expect(wrapper).toExist;
    });

    test('the footer names should be correct', () => {
        const names = wrapper.find('#footerNames');
        expect(names.text()).toEqual('Developed by Raj, Paola, Geraldine, Charan and Dragos');
    });

    test('the footer copyright should be correct', () => {
        const names = wrapper.find('#footer');
        expect(names.text()).toEqual('© Trivia Planet 2020');
    });
    
    test('number of spans', () => {
        const spans = wrapper.find('span');
        expect(spans).toHaveLength(2);
    });
});