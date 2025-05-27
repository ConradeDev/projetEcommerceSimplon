const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
  status : {
        type: String,
        enum: ['Disponible', 'en Vedette', 'Achete', 'Vendu'],
        default: 'Disponible'
    },
},
{
    timestamps:true
});

module.exports = mongoose.model('ShopDB', shopSchema);