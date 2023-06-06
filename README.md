# Rick and Morty Character Finder
Utilizing the Rick and Morty API, this project enables users to search for characters by their names/ID in Rick and Morty and view more detailed information about them in a dedicated page.

### Project Structure
The project primarily consists of two pages, index.html and character_id.html, each with their respective stylesheets (located in css/style.css) and JavaScript files (located within the javascript/ directory).

#### index.html
This page provides an input field for users to enter a character's name and perform the search by clicking the Find Characters button. The search results are displayed as cards underneath, and clicking on a card image redirects to the character_id.html page, passing the ID of the character as a parameter.

#### character_id.html
This page autofills the character ID from the URL parameter into the input field, but users can manually enter other character IDs as well. Clicking on the Find Characters button displays detailed information about the character, including the character's name, status, species, gender, and origin.

### Installation and Running
1. Clone this repository: git clone https://github.com/ccste/rick-morty.git
2. Navigate to the project directory: cd rick-morty
3. Open index.html to start using the application

### Usage
Detailed usage instructions have already been provided in the Project Structure section above.

### Related Links
Rick and Morty API: https://rickandmortyapi.com/
