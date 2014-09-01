var url = require('url');
var redisUrl = url.parse(process.env.REDISCLOUD_URL || process.env.REDIS_URL);

module.exports = {
	domain: process.env.DOMAIN,
	port: process.env.NODE_ENV !== 'production' && process.env.PORT,
	keys: process.env.KEYS,
	mongoUrl: process.env.MONGOHQ_URL || process.env.MONGO_URL,
	redis: {
		host: redisUrl.hostname,
		port: redisUrl.port,
		pass: redisUrl.auth && redisUrl.auth.split(':')[1]
	},
	fb: {
		appId: process.env.FB_APP_ID,
		appSecret: process.env.FB_APP_SECRET
	}
};
