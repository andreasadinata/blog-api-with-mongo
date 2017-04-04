exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'mongodb://admin:admin@ds143980.mlab.com:43980/blog-api-with-mongo';
exports.PORT = process.env.PORT || 3017;
