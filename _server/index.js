const http = require("https");
const path = require("path");
const fs = require("fs");

const express = require("express");

const utils = require("./src/utils");
const config = require("./config");

const app = express();
const routes = {
	index: require("./routes/index"),
	upload: require("./routes/upload"),
};

app.use("/assets", express.static(path.join(config.basepath, "./assets")));

// routes
app.use("/upload", routes.upload);
app.use("/", routes.index);

app.listen(config.port, () =>  utils.log(`listening on http://localhost:${config.port}/`));
