![image](https://user-images.githubusercontent.com/63275054/138734075-673a666d-0b16-494e-b256-75ca851a98b0.png)
![image](https://user-images.githubusercontent.com/63275054/138734118-db29372b-d443-4879-9807-23af4f591957.png)



## :pen: API - JSON - Test API

> **API for database of movies and series**

- [x] **https://www.themoviedb.org**

> **Manipulate JSON**

- [x] **http://jsonviewer.stack.hu**

> **Test Requests**

- [x] **http://resttesttest.com**

> **Material-UI Icons**

- [x] **https://material-ui.com/en/components/material-icons/**



## :tv: Project

This project is a simple reproduction of **NetFlix** to study React, it does not contain all the functionalities.

For the highlight area and list of movies and series the **themoviedb** API was used.

### :paperclip: **1. Creating and Adding Icons**

```bash
$npx create-react-app netflixclone
$cd netflix_clone
$ npm install @material-ui/core @material-ui/icons
$npm start
```

### :paperclip: **2. File and Folder Structure**

```bash
$ src
                  $ components
	             	FeaturedMovie.css
	             	FeaturedMovie.js
	             	Header.css
	             	Header.js
	             	MovieRow.css
	             	MovieRow.js
	       App.css
	       App.js
	       index.css
               index.js
         	Tmdb.js
```

### :computer: App.js

The main screen was divided into **03 components**:

* Header - **<Header />**
* Featured - **<FeaturedMovie />**
* Movie and Series List - **<MovieRow />**



### :paperclip: ​Tmdb.js

This file contains the communication with the **API** of *themoviedb.org* that returns a catalog where we find information about movies and series.



### :paperclip: Header

This component is only used to compose the main screen. It only contains the **logo** and **icon** of the logged in user, it has no events.



### :paperclip: FeaturedMovie

This component is responsible for showing a featured movie or series.

Informing: *score*, *year of release*, *total seasons* and *a brief description*.

Every time the page loads the highlight changes.



### :paperclip: **MovieRow**

This component is responsible for showing the lists of:

* Netflix originals;
*Recommended ***trending***;
* Highly ***Best Rated - Top Rated***
* Action
* Comedy
* Horror
* Romance
* Documentaries
