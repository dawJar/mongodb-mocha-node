const assert = require('assert');
const CarBrand = require('../model/carBrand');


describe('#deleteCarBrand()', () => {

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

    it('deleting records from db', (done) => {
        CarBrand.remove({ brand: carBrand.brand }).then(() => {
            CarBrand.remove({ brand: carBrand2.brand }).then(() => {
                CarBrand.find({}).then((result) => {
                    assert(result.length === 0);
                    done();
                });
            });
        });
    });

});
