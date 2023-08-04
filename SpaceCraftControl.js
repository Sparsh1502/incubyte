function SpaceCraftControl(initialPosition, initialDirection,commands ) {
    let [x,y,z] = initialPosition;
    currentDirection = initialDirection;
    return [x,y,z,currentDirection];
}

module.exports = SpaceCraftControl;

