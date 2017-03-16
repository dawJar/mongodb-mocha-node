const mongoose = require('mongoose');


// overrite mongoose promise
mongoose.Promise = global.Promise;

// mocha hook
// connect to db before test run
before(function (done) {

    // connection to db
    mongoose.connect('mongodb://localhost/testDb');

    mongoose.connection.once('open', function () {
        console.log('connection to db has been made');
        done();
    }).on('error', function (error) {
        console.log('connection error', error);
    });

});

// mocha hook
// drop collections before every test
beforeEach(function (done) {
    mongoose.connection.collections.people.drop(function () {
        done();
    });
});

beforeEach(function (done) {
    mongoose.connection.collections.carbrands.drop(function () {
        done();
    });
});
