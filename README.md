# IDEA BEHIND THE APP

The movie database is a public api which can be used to retrieve movies or tv shows. This app deals only with movies. The app consists of three pages
1) Home page - Displays the various movie categories
2) Catgory Page -  Displays all the movies which belong to the chosen category
3) Details Page - Displays the details of a single chosen categorie movie

# FRAMEWORK + LANGUAGE USED

REACT.JS + Typescript

# INTRODUCTION TO THE CODEBASE STRUCTURE
A very modular folder structure has been used. The structure is as follows

1) /src/components - Holds all reusable components which are organised based on the features they provide. For example /src/cards/MovieCards provides a reusable card component which displays all the movies which belong to the chosen movie category.
2) /src/pages - This folder contains the different pages of this app
3) /src/hooks - Contains custom hook implementation which in this case is to check when user reaches the page bottom on scrolling which in turn in used in the infinite scrolling
4) /src/services - Contains all the api backend calls
5) /src/tests - Holds all the react tests created using jest 
6) /src/utils - Holds util functions , type definitions, enums etc
7) /src/secrets -  A folder which holds all user secrets so as to no expose it to the frontend


# IMPORTANT DECISIONS TAKEN TO IMPLEMENT THIS APP
1) A custom hook has been created to check for when user scrolls to the bottom of the page. This is a reusable component and can be used anytime in the future without needing to redefine the code. 
2) The movie database version 3 is used to fetch the movie categories whereas version 4 is used to fetch movies from selected category because version 4 implements splitting results into pages which is a must for pagination.
3) Infinite scrolling has been implemented to provide more results on reaching page bottom.
4) For better user experience a scroll to top button has been added to the end of the selected category movies page.
5) Since the background and navigation buttons are common for every page, a reusable Layout and Navigation component have been created which reduces code redundancy.
6) As React context is used, the selected category and selected movie values are stored to the local storage to persist these values on page reload.

# WEB APP 
The app has been deployed on vercel and can be tested using this following link https://binge-my-show.vercel.app/
