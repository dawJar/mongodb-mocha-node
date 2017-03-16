const assert = require('assert');
const Person = require('../model/person');


describe('#findPerson()', function () {

    let person;

    // mocha hook
    // create default records to test finding
    beforeEach(function (done) {
        person = new Person({
            name: 'Joe'
        });

        person.save().then(function () {
            done();
        });
    });

    it('finds one record in ppl collection', function (done) {
        Person.findOne({ name: person.name }).then(function (result) {
            assert(result.name === person.name)
            done();
        });
    });

    it('finds one record by ID in ppl collection', function (done) {
        Person.findOne({ _id: person._id }).then(function (result) {
            assert(result._id.toString() === person._id.toString());
            done();
        });
    });

});
