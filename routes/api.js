const http = require("https");

const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const rezults = require("rezults");

const config = require("../config");

const jsonparser = bodyparser.json();
const router = express.Router();


router.post("/", jsonparser, (_req, _res) => {
	let rez = new rezults();
	let data = {
		image: _req.body.image.replace(/^data:image\/(png|gif|jpeg|jpg);base64,/, ""),
		type: "base64",
	};
	let options = {
		method: "POST",
		url: "https://api.imgur.com/3/image",
		headers: {
			"authorization": `Client-ID ${config.imgur_api.client_id}`,
		},
		formData: data,
	};
	request.post(options, function optionalCallback(err, httpResponse, body) {
		if (err) {
			return console.error('upload failed:', err);
		}
		// here we want to save the image to the database


		// 
		

	});
});

module.exports = router;



