import { shallow } from 'enzyme';
import { expectation } from 'sinon';
import Quiz from '.';

describe('Quiz', ()=>{
    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<Quiz.WrappedComponent />);
    });

    test('It exists', ()=>{
        expect(wrapper).toExist;
    })
})