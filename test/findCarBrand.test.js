const assert = require('assert');
const CarBrand = require('../model/carBrand');


describe('#findCarBrand()', () => {

    let carBrand;
    let carBrand2;

    beforeEach((done) => {
        carBrand = new CarBrand({
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

        carBrand2 = new CarBrand({
            brand: 'Mustang',
            models: [
                {
                    type: 'muscle car'
                }
            ]
        });

        carBrand.save().then(() => {
            carBrand2.save().then(() => done());
        });
    });

    it('find all records in CarBrand collection', (done) => {
        CarBrand.find({}).then((result) => {
            if (carBrand._id.toString() === result[0]._id.toString()
                    && carBrand2._id.toString() === result[1]._id.toString()) {
                assert(true);
                done();
            }
        });
    });

});
