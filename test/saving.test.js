const assert = require('assert');
const Person = require('../model/person');
const CarBrand = require('../model/carBrand');


describe('#save()', function () {

    // person
    it('saves person with one property to database', function (done) {
        let person = new Person({
            name: 'Joe'
        });

        person.save().then(function () {
            // isNew true => new localy, false => saved to db
            assert(person.isNew === false);
            done();
        });
    });

    it('saves person with all properties to database', function (done) {
        let person = new Person({
            name: 'Joe',
            age: 5,
            invited: true
        });

        person.save().then(function (result) {
            assert(result === person);
            done();
        });
    });

    // carBrand
    it('saves carBrand to db', function (done) {
        let carBrand = new CarBrand({
            brand: 'Audi',
            company: 'VW Group',
            models: [
                {
                    model: 'A4',
                    productionYear: 2005,
                    type: 'coupe'
                }
            ]
        });

        carBrand.save().then(function (result) {
            assert(result === carBrand);
            done();
        });
    });

});
