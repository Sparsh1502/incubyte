const SpaceCraftControl = require('./SpaceCraftControl');

describe('Test for only function SpaceCraftControl',()=>{
    it('returns array with  empty commands array',()=>{
        expect(SpaceCraftControl([0,0,0],'Up',[])).toEqual([0,0,0,'Up']);
    });
    it('returns array with empty commands array and initial direction ',()=>{
        expect(SpaceCraftControl([0,0,0],'',[])).toEqual([0,0,0,''])
    })
    });
    
    describe('Test for directions',()=>{
        it('Finding index',()=>{
     expect(DirectionIndex('Down')).toBe(5);
     expect(DirectionIndex('N')).toBe(0);
        }) ;
    });
    