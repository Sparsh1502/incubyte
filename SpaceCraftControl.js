const directions = ['N','E','S','W','Up','Down'];
let currentDirection;
let x,y,z;


function SpaceCraftControl(initialPosition, initialDirection,commands ) {
    let [X,Y,Z] = initialPosition;
    x=X; y=Y;z=Z;
    currentDirection = initialDirection;
    for(let command of commands){
        switch(command){
            case 'f':
               moveForwardOrBackward(1);
               break;  

            case 'b':
                moveForwardOrBackward(-1)
                break;
            
            case 'l':
                 turnLeftOrRight(-1)
                 break
            
            case 'r':
                turnLeftOrRight(1)
                break

            case 'u':
            turnUpOrDown(1)
            break

            case 'd':
            turnUpOrDown(-1)
            break

            default:
                break
        }
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
   
   function turnUpOrDown(rotates){
    currentDirection = rotates===1?(directions[4]):directions[5]
}


module.exports = {SpaceCraftControl,DirectionIndex,moveForwardOrBackward,turnLeftOrRight,turnUpOrDown};

