document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-character');
  form.addEventListener('submit', handleFormSubmits);
  form.addEventListener('click', switchPic);

  const deleteAll = document.querySelector('#delete');
  deleteAll.addEventListener('click', handleDelete);
});

const handleFormSubmits = function(event){
  event.preventDefault();

  const gameCard = document.querySelector('#character-list');

  const gameCardItem = createGameCardItem(event.target);
  gameCard.appendChild(gameCardItem)

  event.target.reset();
}

const createGameCardItem = function(form){

  const result = document.createElement('li');
  result.classList.add('game-item')

  const name = document.createElement('h3');
  name.textContent = `${event.target.name.value}`;
  result.appendChild(name);

  const game = document.createElement('h2');
  game.textContent = `${event.target.game.value}`;

  if (game.textContent == "For Honor"){
    result.classList.remove('game-item')
    result.classList.add('for-honor')

  }else if (game.textContent == "Killer Instinct"){
    result.classList.remove('game-item')
    result.classList.add('killer-instinct')

  }else if (game.textContent == "Mortal Kombat"){
    result.classList.remove('game-item')
    result.classList.add('mortal-kombat')

  }else if (game.textContent == "Tekken"){
    result.classList.remove('game-item')
    result.classList.add('tekken')
  }

  result.appendChild(game);

  const image = document.createElement('img')
  image.setAttribute("src", `${event.target.imagesource.value}`)
  image.setAttribute("class", "pocketcard")
  result.appendChild(image)

  const wins = document.createElement('h4');
  wins.textContent = `Wins: ${event.target.wins.value}`;
  result.appendChild(wins);

  const losses = document.createElement('h4');
  losses.textContent = `Losses: ${event.target.losses.value}`;
  result.appendChild(losses);

  const ratio = document.createElement('h4');
  ratio.textContent = `W/L Ratio: ${event.target.wins.value / event.target.losses.value}`;
  result.appendChild(ratio);

  return result

};

const switchPic = function(event){
  result.getElementbyclass('body')
  switchPic.classList.add('ryu')
  result.appendChild(switchPic)
}

const handleDelete = function(event){
  const characterList = document.querySelector('#character-list');
  characterList.innerHTML = '';
};
