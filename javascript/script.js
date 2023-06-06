// Rick and Morty API: https://rickandmortyapi.com/
// Testing an API

// Function that fetches our characters based on the name from the input field
function fetchCharacters() {
  const inputValue = document.getElementById('character-input').value;

  // using Fetch to get the api characters
  fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
    .then(resp => resp.json())
    .then(data => {
      formatCharacters(data.results);
    });
}

// Function that formats the data that has been returned from our character fetch (and appends it to the DOM)
function formatCharacters(characters) {
  const charDiv = document.getElementById('characters');
  charDiv.innerHTML = '';

  // foreach to get all the characters
  characters.forEach(character => {
    let charElem = document.createElement('div');
    charElem.innerHTML = `<div><img src="${character.image}" data-id="${character.id}"><h2>${character.name}</h2></div>`;
    charElem.querySelector('img').addEventListener('click', function () {
      window.location.href = `character_id.html?id=${this.dataset.id}`;
    });
    charDiv.appendChild(charElem);
  });
}