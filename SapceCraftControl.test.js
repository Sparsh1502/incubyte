const {SpaceCraftControl,DirectionIndex,moveForwardOrBackward,turnLeftOrRight,turnUpOrDown} = require('./SpaceCraftControl');

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
    
    describe('Test for moving forward or backward',()=>{
        it('returns nothing',()=>{
            expect(moveForwardOrBackward(1)).toBe();
            expect(moveForwardOrBackward(-1)).toBe();
        })
    })

    describe('Test for turning left or right',()=>{
        it('returns nothing',()=>{
            expect(turnLeftOrRight(1)).toBe();
            expect(turnLeftOrRight(-1)).toBe();
        })
        })

    
describe('turn u or d',()=>{
    it('up down',()=>{
        expect(turnUpOrDown(1)).toBe();
        expect(turnUpOrDown(-1)).toBe();
    })
})