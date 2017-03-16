const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CarModelSchema = new Schema({
    model: String,
    productionYear: Number,
    type: String
});

const CarBrandSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    company: {
        type: String,
        default: 'GM'
    },
    models: [ CarModelSchema ]
});

const CarBrand = mongoose.model('carBrand', CarBrandSchema);

module.exports = CarBrand;
