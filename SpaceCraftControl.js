const directions = ['N','E','S','W','Up','Down'];

function SpaceCraftControl(initialPosition, initialDirection,commands ) {
    let [x,y,z] = initialPosition;
    currentDirection = initialDirection;
    return [x,y,z,currentDirection];
}


function DirectionIndex(direction){
    return directions.indexOf(direction)
}




module.exports = {SpaceCraftControl,DirectionIndex};

