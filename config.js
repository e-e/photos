const path = require("path");

let config = {
	env: "dev",
	port: 8882,
	prod_env: "production",
	debug: true,
	basepath: __dirname,
	viewspath: path.join(__dirname, "./views"),
	imgur_api: {
		client_id: "7f0c922c1d1937f",
		client_secret: "5ed7ac76e4934df49ff25e8f43f43a6c7162e8b1",
		urls: {
			album: {
				create: "https://api.imgur.com/3/album"
			},
			image: {
				upload: ""
			}
		}
	}
};
module.exports = config;


