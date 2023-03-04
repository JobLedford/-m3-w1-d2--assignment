var app = require('./app');

var server = app.listen(3000, function() {
    console.log(`Express is runnin on port ${server.address().port}`);
})