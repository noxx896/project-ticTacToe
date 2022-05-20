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

  const initOptions = document.getElementById('init-options');
  initOptions.textContent = 'Initialize content';

  const initNewBtn = document.createElement('button');
  initNewBtn.id = 'init-new-btn';
  initNewBtn.textContent = 'New';
  initOptions.appendChild(initNewBtn);

  content.style.display = 'none';
  initOptions.style.display = 'block';
  
  initNewBtn.addEventListener('click', function() {
    initOptions.style.display = 'none';
    content.style.display = 'flex';
  });

})();
