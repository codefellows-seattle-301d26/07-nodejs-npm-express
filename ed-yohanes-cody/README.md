# AJAX and JSON and WRRC

**Author**: Ed, Cody and Yohanes
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->
This application is a blog with post from various authors and categories. It now loads JSON data from a file via a getJson and loads that data for the user. We added a 404 prompt for error pages. 

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
They should have a basic understanding of JS, jQuery, and now Handlebars. Use live-server to render site.User should call Article.fetchAll function inside the index.html page. Then they should get the rawData by using  getjson and set this data to fill filters and show articles in the  web page. They need to be able to load node and express.js

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
HTML
CSS
SMACSS
JS
jQuery
Handlebars
AJAX
JSON
Node
NPM
Express.js

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

12-13-2017 10:05am Add port listener
12-13-2017 10:45am installed nodemon, packages correctly installed packages, working on new index.html
12-13-2017 11:30pm got the app.get working for new html
12-13-2017 12:00pm Got the 404 working with app.use

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
Big shoutout to Katherine! For giving us guidance on send file functions and installing packages correctly.
