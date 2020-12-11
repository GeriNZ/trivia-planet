import Game from '.'

describe('tests the Game', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Game />)
    });

    test('it exists', () => {
        expect(wrapper).toExist;
    });

    test('the apiForm is rendered', () => {
        const apiform = wrapper.find('ApiForm');
        expect(apiform).toExist;
    });
});
