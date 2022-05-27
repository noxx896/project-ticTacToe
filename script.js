/* script */

// Module to play one game
const playGame = (playerOne, playerTwo) => {
  //Player's moves
  let move = [null, null, null,
               null, null, null,
               null, null, null];
  // Player turn
  let playerTurn = false;

  let moveCounter = 0;

  const gameInfo = document.getElementById('game-info');
  gameInfo.textContent = `Player 1: ${playerOne.name}\n
                          Player 2: ${playerTwo.name}`

  // Board buttons
  const sqr_0 = document.getElementById('sqr_0');
  const sqr_1 = document.getElementById('sqr_1');
  const sqr_2 = document.getElementById('sqr_2');
  const sqr_3 = document.getElementById('sqr_3');
  const sqr_4 = document.getElementById('sqr_4');
  const sqr_5 = document.getElementById('sqr_5');
  const sqr_6 = document.getElementById('sqr_6');
  const sqr_7 = document.getElementById('sqr_7');
  const sqr_8 = document.getElementById('sqr_8');

  // Button events
  sqr_0.addEventListener('click', function() {
    sqr_0.disabled = true;
    if(playerTurn) {
      playerTurn = false;
      move[0] = 1;
      sqr_0.textContent = 'CIRCULO'
      moveCounter++;
    }else {
      playerTurn = true;
      move[0] = 0;
      sqr_0.textContent = 'EQUIS';
      moveCounter++;
    }
    if(moveCounter >= 5) {
      if(move[0] == 0 && move[1] == 0 && move[2] == 0 ||
         move[3] == 0 && move[4] == 0 && move[5] == 0 ||
         move[6] == 0 && move[7] == 0 && move[8] == 0 ||
         move[0] == 0 && move[3] == 0 && move[6] == 0 ||
         move[1] == 0 && move[4] == 0 && move[7] == 0 ||
         move[2] == 0 && move[5] == 0 && move[8] == 0 ||
         move[0] == 0 && move[4] == 0 && move[8] == 0 ||
         move[2] == 0 && move[4] == 0 && move[6] == 0) {
        console.log(`${playerOne.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(move[0] == 1 && move[1] == 1 && move[2] == 1 ||
               move[3] == 1 && move[4] == 1 && move[5] == 1 ||
               move[6] == 1 && move[7] == 1 && move[8] == 1 ||
               move[0] == 1 && move[3] == 1 && move[6] == 1 ||
               move[1] == 1 && move[4] == 1 && move[7] == 1 ||
               move[2] == 1 && move[5] == 1 && move[8] == 1 ||
               move[0] == 1 && move[4] == 1 && move[8] == 1 ||
               move[2] == 1 && move[4] == 1 && move[6] == 1) {
        console.log(`${playerTwo.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(moveCounter == 9){
        console.log('IT\'S A DRAW!!');
      }
    }
  });
  sqr_1.addEventListener('click', function() {
    sqr_1.disabled = true;
    if(playerTurn) {
      playerTurn = false;
      move[1] = 1;
      sqr_1.textContent = 'CIRCULO'
      moveCounter++;
    }else {
      playerTurn = true;
      move[1] = 0;
      sqr_1.textContent = 'EQUIS';
      moveCounter++;
    }
    if(moveCounter >= 5) {
      if(move[0] == 0 && move[1] == 0 && move[2] == 0 ||
         move[3] == 0 && move[4] == 0 && move[5] == 0 ||
         move[6] == 0 && move[7] == 0 && move[8] == 0 ||
         move[0] == 0 && move[3] == 0 && move[6] == 0 ||
         move[1] == 0 && move[4] == 0 && move[7] == 0 ||
         move[2] == 0 && move[5] == 0 && move[8] == 0 ||
         move[0] == 0 && move[4] == 0 && move[8] == 0 ||
         move[2] == 0 && move[4] == 0 && move[6] == 0) {
        console.log(`${playerOne.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(move[0] == 1 && move[1] == 1 && move[2] == 1 ||
               move[3] == 1 && move[4] == 1 && move[5] == 1 ||
               move[6] == 1 && move[7] == 1 && move[8] == 1 ||
               move[0] == 1 && move[3] == 1 && move[6] == 1 ||
               move[1] == 1 && move[4] == 1 && move[7] == 1 ||
               move[2] == 1 && move[5] == 1 && move[8] == 1 ||
               move[0] == 1 && move[4] == 1 && move[8] == 1 ||
               move[2] == 1 && move[4] == 1 && move[6] == 1) {
        console.log(`${playerTwo.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(moveCounter == 9){
        console.log('IT\'S A DRAW!!');
      }
    }
  });
  sqr_2.addEventListener('click', function() {
    sqr_2.disabled = true;
    if(playerTurn) {
      playerTurn = false;
      move[2] = 1;
      sqr_2.textContent = 'CIRCULO'
      moveCounter++;
    }else {
      playerTurn = true;
      move[2] = 0;
      sqr_2.textContent = 'EQUIS';
      moveCounter++;
    }
    if(moveCounter >= 5) {
      if(move[0] == 0 && move[1] == 0 && move[2] == 0 ||
         move[3] == 0 && move[4] == 0 && move[5] == 0 ||
         move[6] == 0 && move[7] == 0 && move[8] == 0 ||
         move[0] == 0 && move[3] == 0 && move[6] == 0 ||
         move[1] == 0 && move[4] == 0 && move[7] == 0 ||
         move[2] == 0 && move[5] == 0 && move[8] == 0 ||
         move[0] == 0 && move[4] == 0 && move[8] == 0 ||
         move[2] == 0 && move[4] == 0 && move[6] == 0) {
        console.log(`${playerOne.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(move[0] == 1 && move[1] == 1 && move[2] == 1 ||
               move[3] == 1 && move[4] == 1 && move[5] == 1 ||
               move[6] == 1 && move[7] == 1 && move[8] == 1 ||
               move[0] == 1 && move[3] == 1 && move[6] == 1 ||
               move[1] == 1 && move[4] == 1 && move[7] == 1 ||
               move[2] == 1 && move[5] == 1 && move[8] == 1 ||
               move[0] == 1 && move[4] == 1 && move[8] == 1 ||
               move[2] == 1 && move[4] == 1 && move[6] == 1) {
        console.log(`${playerTwo.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(moveCounter == 9){
        console.log('IT\'S A DRAW!!');
      }
    }
  });
  sqr_3.addEventListener('click', function() {
    sqr_3.disabled = true;
    if(playerTurn) {
      playerTurn = false;
      move[3] = 1;
      sqr_3.textContent = 'CIRCULO'
      moveCounter++;
    }else {
      playerTurn = true;
      move[3] = 0;
      sqr_3.textContent = 'EQUIS';
      moveCounter++;
    }
    if(moveCounter >= 5) {
      if(move[0] == 0 && move[1] == 0 && move[2] == 0 ||
         move[3] == 0 && move[4] == 0 && move[5] == 0 ||
         move[6] == 0 && move[7] == 0 && move[8] == 0 ||
         move[0] == 0 && move[3] == 0 && move[6] == 0 ||
         move[1] == 0 && move[4] == 0 && move[7] == 0 ||
         move[2] == 0 && move[5] == 0 && move[8] == 0 ||
         move[0] == 0 && move[4] == 0 && move[8] == 0 ||
         move[2] == 0 && move[4] == 0 && move[6] == 0) {
        console.log(`${playerOne.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(move[0] == 1 && move[1] == 1 && move[2] == 1 ||
               move[3] == 1 && move[4] == 1 && move[5] == 1 ||
               move[6] == 1 && move[7] == 1 && move[8] == 1 ||
               move[0] == 1 && move[3] == 1 && move[6] == 1 ||
               move[1] == 1 && move[4] == 1 && move[7] == 1 ||
               move[2] == 1 && move[5] == 1 && move[8] == 1 ||
               move[0] == 1 && move[4] == 1 && move[8] == 1 ||
               move[2] == 1 && move[4] == 1 && move[6] == 1) {
        console.log(`${playerTwo.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(moveCounter == 9){
        console.log('IT\'S A DRAW!!');
      }
    }
  });
  sqr_4.addEventListener('click', function() {
    sqr_4.disabled = true;
    if(playerTurn) {
      playerTurn = false;
      move[4] = 1;
      sqr_4.textContent = 'CIRCULO'
      moveCounter++;
    }else {
      playerTurn = true;
      move[4] = 0;
      sqr_4.textContent = 'EQUIS';
      moveCounter++;
    }
    if(moveCounter >= 5) {
      if(move[0] == 0 && move[1] == 0 && move[2] == 0 ||
         move[3] == 0 && move[4] == 0 && move[5] == 0 ||
         move[6] == 0 && move[7] == 0 && move[8] == 0 ||
         move[0] == 0 && move[3] == 0 && move[6] == 0 ||
         move[1] == 0 && move[4] == 0 && move[7] == 0 ||
         move[2] == 0 && move[5] == 0 && move[8] == 0 ||
         move[0] == 0 && move[4] == 0 && move[8] == 0 ||
         move[2] == 0 && move[4] == 0 && move[6] == 0) {
        console.log(`${playerOne.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(move[0] == 1 && move[1] == 1 && move[2] == 1 ||
               move[3] == 1 && move[4] == 1 && move[5] == 1 ||
               move[6] == 1 && move[7] == 1 && move[8] == 1 ||
               move[0] == 1 && move[3] == 1 && move[6] == 1 ||
               move[1] == 1 && move[4] == 1 && move[7] == 1 ||
               move[2] == 1 && move[5] == 1 && move[8] == 1 ||
               move[0] == 1 && move[4] == 1 && move[8] == 1 ||
               move[2] == 1 && move[4] == 1 && move[6] == 1) {
        console.log(`${playerTwo.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(moveCounter == 9){
        console.log('IT\'S A DRAW!!');
      }
    }
  });
  sqr_5.addEventListener('click', function() {
    sqr_5.disabled = true;
    if(playerTurn) {
      playerTurn = false;
      move[5] = 1;
      sqr_5.textContent = 'CIRCULO'
      moveCounter++;
    }else {
      playerTurn = true;
      move[5] = 0;
      sqr_5.textContent = 'EQUIS';
      moveCounter++;
    }
    if(moveCounter >= 5) {
      if(move[0] == 0 && move[1] == 0 && move[2] == 0 ||
         move[3] == 0 && move[4] == 0 && move[5] == 0 ||
         move[6] == 0 && move[7] == 0 && move[8] == 0 ||
         move[0] == 0 && move[3] == 0 && move[6] == 0 ||
         move[1] == 0 && move[4] == 0 && move[7] == 0 ||
         move[2] == 0 && move[5] == 0 && move[8] == 0 ||
         move[0] == 0 && move[4] == 0 && move[8] == 0 ||
         move[2] == 0 && move[4] == 0 && move[6] == 0) {
        console.log(`${playerOne.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(move[0] == 1 && move[1] == 1 && move[2] == 1 ||
               move[3] == 1 && move[4] == 1 && move[5] == 1 ||
               move[6] == 1 && move[7] == 1 && move[8] == 1 ||
               move[0] == 1 && move[3] == 1 && move[6] == 1 ||
               move[1] == 1 && move[4] == 1 && move[7] == 1 ||
               move[2] == 1 && move[5] == 1 && move[8] == 1 ||
               move[0] == 1 && move[4] == 1 && move[8] == 1 ||
               move[2] == 1 && move[4] == 1 && move[6] == 1) {
        console.log(`${playerTwo.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(moveCounter == 9){
        console.log('IT\'S A DRAW!!');
      }
    }
  });
  sqr_6.addEventListener('click', function() {
    sqr_6.disabled = true;
    if(playerTurn) {
      playerTurn = false;
      move[6] = 1;
      sqr_6.textContent = 'CIRCULO'
      moveCounter++;
    }else {
      playerTurn = true;
      move[6] = 0;
      sqr_6.textContent = 'EQUIS';
      moveCounter++;
    }
    if(moveCounter >= 5) {
      if(move[0] == 0 && move[1] == 0 && move[2] == 0 ||
         move[3] == 0 && move[4] == 0 && move[5] == 0 ||
         move[6] == 0 && move[7] == 0 && move[8] == 0 ||
         move[0] == 0 && move[3] == 0 && move[6] == 0 ||
         move[1] == 0 && move[4] == 0 && move[7] == 0 ||
         move[2] == 0 && move[5] == 0 && move[8] == 0 ||
         move[0] == 0 && move[4] == 0 && move[8] == 0 ||
         move[2] == 0 && move[4] == 0 && move[6] == 0) {
        console.log(`${playerOne.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(move[0] == 1 && move[1] == 1 && move[2] == 1 ||
               move[3] == 1 && move[4] == 1 && move[5] == 1 ||
               move[6] == 1 && move[7] == 1 && move[8] == 1 ||
               move[0] == 1 && move[3] == 1 && move[6] == 1 ||
               move[1] == 1 && move[4] == 1 && move[7] == 1 ||
               move[2] == 1 && move[5] == 1 && move[8] == 1 ||
               move[0] == 1 && move[4] == 1 && move[8] == 1 ||
               move[2] == 1 && move[4] == 1 && move[6] == 1) {
        console.log(`${playerTwo.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(moveCounter == 9){
        console.log('IT\'S A DRAW!!');
      }
    }
  });
  sqr_7.addEventListener('click', function() {
    sqr_7.disabled = true;
    if(playerTurn) {
      playerTurn = false;
      move[7] = 1;
      sqr_7.textContent = 'CIRCULO'
      moveCounter++;
    }else {
      playerTurn = true;
      move[7] = 0;
      sqr_7.textContent = 'EQUIS';
      moveCounter++;
    }
    if(moveCounter >= 5) {
      if(move[0] == 0 && move[1] == 0 && move[2] == 0 ||
         move[3] == 0 && move[4] == 0 && move[5] == 0 ||
         move[6] == 0 && move[7] == 0 && move[8] == 0 ||
         move[0] == 0 && move[3] == 0 && move[6] == 0 ||
         move[1] == 0 && move[4] == 0 && move[7] == 0 ||
         move[2] == 0 && move[5] == 0 && move[8] == 0 ||
         move[0] == 0 && move[4] == 0 && move[8] == 0 ||
         move[2] == 0 && move[4] == 0 && move[6] == 0) {
        console.log(`${playerOne.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(move[0] == 1 && move[1] == 1 && move[2] == 1 ||
               move[3] == 1 && move[4] == 1 && move[5] == 1 ||
               move[6] == 1 && move[7] == 1 && move[8] == 1 ||
               move[0] == 1 && move[3] == 1 && move[6] == 1 ||
               move[1] == 1 && move[4] == 1 && move[7] == 1 ||
               move[2] == 1 && move[5] == 1 && move[8] == 1 ||
               move[0] == 1 && move[4] == 1 && move[8] == 1 ||
               move[2] == 1 && move[4] == 1 && move[6] == 1) {
        console.log(`${playerTwo.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(moveCounter == 9){
        console.log('IT\'S A DRAW!!');
      }
    }
  });
  sqr_8.addEventListener('click', function() {
    sqr_8.disabled = true;
    if(playerTurn) {
      playerTurn = false;
      move[8] = 1;
      sqr_8.textContent = 'CIRCULO'
      moveCounter++;
    }else {
      playerTurn = true;
      move[8] = 0;
      sqr_8.textContent = 'EQUIS';
      moveCounter++;
    }
    if(moveCounter >= 5) {
      if(move[0] == 0 && move[1] == 0 && move[2] == 0 ||
         move[3] == 0 && move[4] == 0 && move[5] == 0 ||
         move[6] == 0 && move[7] == 0 && move[8] == 0 ||
         move[0] == 0 && move[3] == 0 && move[6] == 0 ||
         move[1] == 0 && move[4] == 0 && move[7] == 0 ||
         move[2] == 0 && move[5] == 0 && move[8] == 0 ||
         move[0] == 0 && move[4] == 0 && move[8] == 0 ||
         move[2] == 0 && move[4] == 0 && move[6] == 0) {
        console.log(`${playerOne.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(move[0] == 1 && move[1] == 1 && move[2] == 1 ||
               move[3] == 1 && move[4] == 1 && move[5] == 1 ||
               move[6] == 1 && move[7] == 1 && move[8] == 1 ||
               move[0] == 1 && move[3] == 1 && move[6] == 1 ||
               move[1] == 1 && move[4] == 1 && move[7] == 1 ||
               move[2] == 1 && move[5] == 1 && move[8] == 1 ||
               move[0] == 1 && move[4] == 1 && move[8] == 1 ||
               move[2] == 1 && move[4] == 1 && move[6] == 1) {
        console.log(`${playerTwo.name} WINS!!!`);
        sqr_0.disabled = true;
        sqr_1.disabled = true;
        sqr_2.disabled = true;
        sqr_3.disabled = true;
        sqr_4.disabled = true;
        sqr_5.disabled = true;
        sqr_6.disabled = true;
        sqr_7.disabled = true;
        sqr_8.disabled = true;
      }else if(moveCounter == 9){
        console.log('IT\'S A DRAW!!');
      }
    }
  });

  //return 0;

};

// Factory function to create new player
const Player = (name) => {
  let score = null;
  //const getName = () => name;
  const getScore = () => score;
  const setScore = stat => {
    score = stat;
  }

  return {name, getScore};
};

// Start game
const initializeGame = (() => {

  const content = document.querySelector('#content');

  // Initial game options
  const initOptions = document.getElementById('init-options');
  initOptions.textContent = 'Initialize content';

  const initNewBtn = document.createElement('button');
  initNewBtn.id = 'init-new-btn';
  initNewBtn.textContent = 'New';
  initOptions.appendChild(initNewBtn);

  // Game mode
  const selectGameMode = document.getElementById('select-game-mode');
  selectGameMode.textContent = 'Select game mode';

  const otherPlayer = document.createElement('button');
  otherPlayer.id = 'other-player-btn';
  otherPlayer.textContent = 'Other player';
  selectGameMode.appendChild(otherPlayer);

  const artifIntel = document.createElement('button');
  artifIntel.id = 'artificial-intel-btn';
  artifIntel.textContent = 'AI';
  selectGameMode.appendChild(artifIntel);

  // Enter data
  const enterData = document.getElementById('enter-data');
  const nameOne = document.getElementById('name-one');
  const nameTwo = document.getElementById('name-two');
  const startGame = document.getElementById('start-game-btn');

  // Show/Hide content
  content.style.display = 'none';
  selectGameMode.style.display = 'none';
  enterData.style.display = 'none';
  initOptions.style.display = 'block';

  // Button events
  initNewBtn.addEventListener('click', function() {
    initOptions.style.display = 'none';
    selectGameMode.style.display = 'block';
  });

  otherPlayer.addEventListener('click', function() {
    selectGameMode.style.display = 'none';
    enterData.style.display = 'flex';
  });

  startGame.addEventListener('click', function() {
    let playerOne = Player(nameOne.value);
    let playerTwo = Player(nameTwo.value);
    enterData.style.display = 'none';
    content.style.display = 'flex';
    playGame(playerOne, playerTwo);
  });

  return 0;

})();
