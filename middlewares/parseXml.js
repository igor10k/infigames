var parseXml = require('xml2js').parseString;

module.exports = function (xml) {
	return function (callback) {
		parseXml(xml, {
			explicitArray: false,
			emptyTag: ''
		}, function (err, result) {
			callback(err, result);
		});
	};
};
