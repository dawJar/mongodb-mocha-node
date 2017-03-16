const assert = require('assert');
const CarBrand = require('../model/carBrand');


describe('#updateCarBrand()', () => {

    let carBrand;

    // mocha hook
    // create default records to test deleting
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

    it('update brand in all records', (done) => {
        let newBrand = 'Fiat';
        CarBrand.update({}, { $set: { brand: newBrand } }, { multi: true }).then(() => {
            CarBrand.find({}).then((result) => {
                let displayInAssert = false;
                if (result[0].brand === newBrand) {
                    displayInAssert = result[1].brand === newBrand;
                };
                assert(displayInAssert);
                done();
            });
        });
    });

    it('add field in nested schema', (done) => {
        let addProductionYear = 1976;
        CarBrand.findOneAndUpdate({ _id: carBrand2._id },
            { $set: { 'models.0.productionYear': addProductionYear }}).then(() => {

            CarBrand.findOne({ _id: carBrand2._id }).then((result) => {
                assert(result.models[0].productionYear === addProductionYear);
                // assert(true)
                done();
            });
        });
    });

});
