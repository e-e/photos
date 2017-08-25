const config = require("../config");
function log() {
	if (config.debug) {
		console.log.apply(null, arguments);
	}
}

module.exports = {
	log
};