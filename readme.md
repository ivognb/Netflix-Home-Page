![image](https://user-images.githubusercontent.com/63275054/138734075-673a666d-0b16-494e-b256-75ca851a98b0.png)
![image](https://user-images.githubusercontent.com/63275054/138734118-db29372b-d443-4879-9807-23af4f591957.png)



🖊️ API - JSON - Test API
API for movie and series database

 https://www.themoviedb.org
manipulate JSON

 http://jsonviewer.stack.hu
Test Requests

 http://resttesttest.com
Material-UI Icons

 https://material-ui.com/en/components/material-icons/
📺 Project
This project is a simple reproduction of NetFlix to study React, it doesn't contain all the functionalities.

For the highlight area and list of movies and series, themoviedb API was used.

📎 1. Creating and Adding Icons
$npx create-react-app netflixclone
$cd netflixclone
$ npm install @material-ui/core @material-ui/icons
$npm start
📎 2. File and folder structure
$src
$components
FeaturedMovie.css
FeaturedMovie.js
header.css
Header.js
MovieRow.css
MovieRow.js
App.css
App.js
index.css
index.js
Tmdb.js
💻 App.js
The main screen was divided into 03 components:

Header -
Emphasis -
List of Films and Series -
📎 ​Tmdb.js
This file contains the communication with the themoviedb.org API that returns a catalog where we find information about movies and series.

📎 Header
This component is only used to compose the main screen. It only contains the logo and icon of the logged in user, it has no events.

📎 FeaturedMovie
This component is responsible for showing a featured movie or series.

Informing: score, year of release, season total and a brief description.

Every time the page loads the highlight changes.

📎 MovieRow
This component is responsible for showing the lists of:

Netflix Originals;
Recommended trending;
Top rated in high - top rated
Action
Comedy
Horror
Romance
Documentaries
