exports.index = function* () {
	var locals = {};
	if (this.session.notWebApp || this.url.indexOf('notwebapp=true') !== -1) {
		locals.isWebApp = false;
		this.session.notWebApp = true;
	}
	yield this.render('index', locals);
};
