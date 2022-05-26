/* script */

// Module to create a board to play
const gameBoard = (() => {


})();

// Factory function to create new player
const Player = (name) => {

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
  const startGame = document.getElementById('start-game-btn');

  // Show/Hide content
  content.style.display = 'none';
  selectGameMode.style.display = 'none';
  enterData.style.display = 'none';
  initOptions.style.display = 'block';

  initNewBtn.addEventListener('click', function() {
    initOptions.style.display = 'none';
    selectGameMode.style.display = 'block';
  });

  otherPlayer.addEventListener('click', function() {
    selectGameMode.style.display = 'none';
    enterData.style.display = 'flex';
  });

  startGame.addEventListener('click', function() {
    enterData.style.display = 'none';
    content.style.display = 'flex';
  })

})();
