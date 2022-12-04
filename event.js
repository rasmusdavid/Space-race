import { Position, Velocity } from "./components.js";
import { game } from "./game.js";
import { PlayerBall } from "./playerBalls.js";

let timeDiff1 = 0;
let timeDiff2 = 0;


export function keyDown(event) {
    if (event.keyCode === 87) {
        game.player1.upPressed = true;
        
    }
    if (event.keyCode === 79) {
        game.player2.upPressed = true;

    }
    if (event.keyCode === 83) {  
        game.player1.downPressed = true;
       
    }
    if (event.keyCode === 76) { 
        game.player2.downPressed = true;
    }
    if (event.keyCode === 65){
        //kollar så det har gått 3 sek sedan förra skottet, spelare 1
       if(timeDiff1 + 3000 < game.currentTime){
        timeDiff1 = game.currentTime
        game.entities.push(new PlayerBall(new Position(game.player1.position.x + 16, game.player1.position.y), new Velocity(350, 0)))
       }
    }
    if (event.keyCode === 75){
        //kollar så det har gått 3 sek sedan förra skottet, spelare 2
        if(timeDiff2 + 3000 < game.currentTime){
            timeDiff2 = game.currentTime
            game.entities.push(new PlayerBall(new Position(game.player2.position.x - 16, game.player2.position.y), new Velocity(-350, 0)))
        }
    }
}

export function keyUp(event) {
    if (event.keyCode === 87) {
        game.player1.upPressed = false;
    }

    if (event.keyCode === 79) {
        game.player2.upPressed = false;
    }

    if (event.keyCode === 83) {  
        game.player1.downPressed = false;
    }
     
    if (event.keyCode === 76) { 
        game.player2.downPressed = false;
    }
}