const assert = require('assert');
const Person = require('../model/person');


describe('#save()', function () {

    it('saves record with one property to database', function (done) {
        let person = new Person({
            name: 'Joe'
        });

        person.save().then(function () {
            // isNew true => new localy, false => saved to db
            assert(person.isNew === false);
            done();
        });
    });

    it('saves record with all properties to database', function (done) {
        let person = new Person({
            name: 'Joe',
            race: 'pigs',
            age: 5
        });

        person.save().then(function (result) {
            assert(result === person);
            done();
        });
    });

});
