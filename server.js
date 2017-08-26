const http = require("https");
const path = require("path");
const fs = require("fs");

const express = require("express");

const utils = require("./lib/utils");
const config = require("./config");

const app = express();
const routes = {
	index: require("./routes/index"),
	admin: require("./routes/admin"),
	api: require("./routes/api"),
};

app.use("/static", express.static(path.join(config.basepath, "./static")));

// routes
app.use("/admin", routes.admin);
app.use("/api", routes.api);
app.use("/", routes.index);

app.listen(config.port, () =>  utils.log(`listening on http://localhost:${config.port}/`));
