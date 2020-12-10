import { shallow } from 'enzyme';
import { TestScheduler } from 'jest';
import PlayerForm from '.';

describe('PlayerForm test', ()=> {
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<PlayerForm.WrappedComponent />);
    });

    test('it exists', ()=> {
        expect(wrapper).toExist;
    })
})