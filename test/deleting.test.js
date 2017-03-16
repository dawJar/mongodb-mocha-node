const assert = require('assert');
const Person = require('../model/person');


describe('#delete()', function () {

    let person;

    // mocha hook
    // create default records to test deleting
    beforeEach(function (done) {
        person = new Person({
            name: 'Joe'
        });

        person.save().then(function () {
            done();
        });
    });

    it('deleting one record from db', function (done) {
        Person.findOneAndRemove({ name: person.name }).then(function () {
            Person.findOne({ name: person.name }).then(function (result) {
                assert(result === null);
                done();
            });
        });
    });
});
