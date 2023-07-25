#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const API = 'https://swapi-api.hbtn.io/api/films/';

request(API + movieId, function(err, response, body){
	if (err) {
		console.log(err);
	} else if (response.statusCode === 200) {
		const JSONresponse = JSON.parse(body);
		console.log(JSONresponse.title);
	} else {
		console.log(`Error code: ${response.statusCode}`)
	}
})
