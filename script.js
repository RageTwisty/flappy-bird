let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let counter = 0;
// let is used for variables aswell
// gives a random location for the hole to go through
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    counter++;
})
// if you're not jumping moves character down when touching the celing to get the bouncing effect
setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500 - characterTop);
    //if the character touches the block on the top or the left it plays the alert and says game over score and gives you the counter for each time you go throught the holes
    if ((characterTop > 480) || ((blockLeft < 50) &&
        (blockLeft > -20) && ((cTop < holeTop) || (cTop > holeTop + 120)))) {     
        alert("Game Over Score: " + (counter - 1));
        character.style.top = 100 + "px";
        counter = 0;
    }
}, 10);


// jumping
// if character top is greater than 6 and jumpcount is less then 15 
function jump() {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function () {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        //the double && means both need to be true other wise it is false
        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px";
        }
        // resets the jump interval when jumpcount is over 20
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        // the 2 plus signs means adds one to its operand and returns the value before or after the increment depending on where the operator is placed
        jumpCount++; 
        
    }, 10);

}

