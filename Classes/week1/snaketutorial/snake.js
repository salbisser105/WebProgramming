import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 4 ; /*  Moves 2 times per second  */
let newSegments = 0

const snakeBody = [
    //The body of the snake 
    { x:10, y:11 },
]   /* array of different y's */
  
export function update() {
    addSegments()
    
    const inputDirection = getInputDirection()
    for(let i = snakeBody.length -2; i>=0 ; i-- ){
        snakeBody[i+1] = {...snakeBody[i]}    /* What is being made here allows to reference a new object without having problem with references. Creates a duplicate */
    
    }   
    /* We update the head*/
    /*As y increases the snake goes down. */
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
 
}

export function draw(gameBoard){
snakeBody.forEach(segment =>{
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y 
    snakeElement.style.gridColumnStart = segment.x 
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)

})
}
export function expandSnake(amount){
    newSegments += amount
}
export function onSnake(position, {ignoreHead = false} = {}){
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index ===0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0] /*  first element in our body will be the head.*/
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})  /* Ignore head allows us to avoid the comparision between the head itself   */

}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y 
        
    
}
/* Add segments to the snake*/
function addSegments () {
    for (let i = 0; i<newSegments ; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1 ]}) /* With this we are duplicating the last element of our snake. */
    }

    newSegments = 0

}