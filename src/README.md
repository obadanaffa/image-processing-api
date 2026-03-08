Image Processing API
Project Overview

This project is an Image Processing API built using Node.js, Express, and TypeScript.
It allows users to resize images by providing the image filename along with width and height parameters.

The API processes images using the Sharp library and caches resized images to improve performance for future requests.

This project was developed as part of the Udacity Full Stack JavaScript Developer Nanodegree.

Technologies Used

Node.js

Express

TypeScript

Sharp (Image processing)

Jasmine (Testing framework)

SuperTest (API testing)

ESLint (Code linting)

Prettier (Code formatting)
## Installation ==> npm install

## Build ==> npm run build

## Start Server ==>  npm start

Server runs on:http://localhost:3000

## Run Tests ==> npm test


## API Endpoint

Resize an image using the following endpoint:

http://localhost:3000/api/images?filename=cse&width=200&height=200
Example response:
Returns a resized image of "cse.jpg" with dimensions 400x400 pixels.
If the image was already processed before, the cached version will be returned.