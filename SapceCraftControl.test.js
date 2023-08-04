const SpaceCraftControl = require('./SpaceCraftControl');

describe('main function',()=>{
    it('empty',()=>{
        expect(SpaceCraftControl([0,0,0],'Up',[])).toEqual([0,0,0,'Up']);
    });
    });
    