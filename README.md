# node-imgur

## What is this?
This project was created in order to learn how to interact with the imgur API via NodeJS. 
It takes in an image URL (hardlinked), and API key (must be provided) in order to upload a 
picture from the internet to imgur. It returns the status code of the result.

## Prerequisites
In order to use this application, you will need an Imgur Client ID. 
This can be found after [registering](https://api.imgur.com/) an application with imgur.
Then, replace the empty string on [line 3](https://github.com/Tjzabel/node-imgur/blob/master/imgur.js#L3) with the generated client ID.

## Usage
`node imgur.js`
