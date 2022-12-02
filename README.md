[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/us-national-parks?style=flat-square)](/LICENSE.txt)
## US National Parks

Searchable list of US National Parks by park name, state, or region. Made with MongoDB, Express.js, VueJS, and Node.js, collectively known as a MEVN stack.

## Project Screen Shots

* Starting view - Homepage.
![screen shot of project](/screenshots/us-national-parks-screenshot1.png?s=600)

* Search by name - results for "joshua".
![screen shot of project](/screenshots/us-national-parks-screenshot2.png?s=600)

* Search by region - results for "southeast".
![screen shot of project](/screenshots/us-national-parks-screenshot3.png?s=600)

* Search by state - results for "arizona".
![screen shot of project](/screenshots/us-national-parks-screenshot4.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`  

To Run Vue application:  

`npm run dev`  

To Start Server:

`npm run start`  

To Visit App:

`local host address assigned by Vite` 

## Reflection

I previously built this project using Vue, Apollo, and GraphQL, and stored the data for the National Parks locally. I found Apollo and GraphQL hard to learn. The documentation for Apollo often seemed endless.

I wanted to try it again using a combination that might feel more comfortable. I decided to use MongoDB Atlas to house the data and Express server instead of Apollo server. I stuck with Vue, which I like. For the most part, I found MongoDB Atlas to be intuitive. I also found Express was easier to manage than Apollo.

I stored data for the National Parks in MongoDB Atlas, but decided to store data for the "like" icons in local storage. If you're reviewing the 63 parks and trying to figure out which ones to visit, I thought it was more important to know you liked it versus how many strangers liked it.

I also added show/hide-able lists for each category (name, region, state) so people could easily see the name of all parks, the region names the National Park Service uses, and which states/territories have National Parks. I included a map of the regions too.

I tested debouncing ideas to find a middle ground between making numerous calls to the database and making users type out all of, say "North Dakota" to get the parks that exist there. I also used Chrome's Lighthouse and Firefox's Accessibility Tools to ensure the project met Accessibility standards.

## Acknowledgments

* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Park information, photos, and logo from the [National Park Service](https://www.nps.gov/index.htm).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* MEVN tutorials and ideas from [Matt Maribojoc](https://mattmaribojoc.medium.com/creating-a-todo-app-with-a-mevn-full-stack-part-1-da0f4df7e15) and [Anita Sharma](https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Accessibility guidance from [Chrome's](https://www.google.com/chrome/) Lighthouse and [Firefox's](https://www.mozilla.org/en-US/firefox/new/) Accessibility Tools.
* Shields from [Shields](https://shields.io).