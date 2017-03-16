const assert = require('assert');
const Person = require('../model/person');


describe('#update()', function () {

    let person;

    // mocha hook
    // create default records to test deleting
    beforeEach(function (done) {
        person = new Person({
            name: 'Joe',
            age: 5
        });

        person.save().then(function () {
            done();
        });
    });

    it('updating one record from db', function (done) {
        let newAge = 6;
        Person.findOneAndUpdate({ name: person.name }, { age: newAge }).then(function () {
            Person.findOne({ _id: person._id }).then(function (result) {
                assert(result.age === newAge);
                done();
            });
        });
    });

    it('increment all age by one', function (done) {
        Person.update({}, { $inc: { age: 1 } }).then(function () {
            Person.findOne({ name: person.name }).then(function (result) {
                assert(result.age === person.age + 1);
                done();
            });
        });
    });

});
