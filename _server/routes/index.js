const fs = require("fs");
const path = require("path");

const express = require("express");

const config = require("../config");

const router = express.Router();



router.get("/", (req, res) => {
	res.sendFile(path.join(config.viewspath, "./index.html"));
});

module.exports = router;