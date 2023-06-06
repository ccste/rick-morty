// Rick and Morty API: https://rickandmortyapi.com/
// Testing an API

// Function that fetches a character by ID
function fetchCharacterById() {
    const idInputValue = document.getElementById('character-input').value;

    // Using Fetch to get the character by ID from the API
    fetch(`https://rickandmortyapi.com/api/character/${idInputValue}`)
        .then(resp => resp.json())
        .then(data => {
            formatCharacter(data);
        });
}


// Function that formats the character data and appends it to the DOM
function formatCharacter(character) {
    const charDiv = document.getElementById('characters');
    charDiv.innerHTML = '';

    charDiv.innerHTML += `
    <div>
       <img src="${character.image}">
       <h2>Character Name: ${character.name}</h2>
       <p>Status: ${character.status}</p>
       <p>Species: ${character.species}</p>
       <p>Gender: ${character.gender}</p>
       <p>Origin: ${character.origin.name}</p>
    </div>`;
}

// The function getParameterByName is mainly used to parse the URL and obtain the specified query parameter. It matches the URL through a regular expression and decodes the value of the query parameter.
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Fill the 'character-input' box with the 'id' parameter from the URL when the page loads.
window.onload = function () {
    let characterId = getParameterByName('id');
    if (characterId) {
        document.getElementById('character-input').value = characterId;
    }
};
