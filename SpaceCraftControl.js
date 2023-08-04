const directions = ['N','E','S','W','Up','Down'];
let currentDirection;
let x,y,z;


function SpaceCraftControl(initialPosition, initialDirection,commands ) {
    let [X,Y,Z] = initialPosition;
    x=X; y=Y;z=Z;
    currentDirection = initialDirection;
    return [x,y,z,currentDirection];
}


function DirectionIndex(direction){
    return directions.indexOf(direction)
}

function moveForwardOrBackward(step){
    switch (currentDirection){
        case 'N':
            y+=step
            break
        
        case 'S':
             y-=step
            break
            
        case 'E':
            x+=step
            break

        case 'W':
            x-=step
            break

        case 'Up':
            z+=step
            break

        case 'Down':
            z-=step
            break
        
        default:
        break
    }
}

function turnLeftOrRight(rotates){
    let currentIndex = DirectionIndex(currentDirection);
    let newIndex = (currentIndex + rotates + 4)%4;
    currentDirection = directions[newIndex];
   }
   


module.exports = {SpaceCraftControl,DirectionIndex,moveForwardOrBackward,turnLeftOrRight};

