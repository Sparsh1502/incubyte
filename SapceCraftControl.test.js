const SpaceCraftControl = require('./SpaceCraftControl');

describe('Test for only function SpaceCraftControl',()=>{
    it('returns array with no empty commands array',()=>{
        expect(SpaceCraftControl([0,0,0],'Up',[])).toEqual([0,0,0,'Up']);
    });
    });
    