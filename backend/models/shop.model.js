const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
  title: { type: String, required: true ,trim:true},
  description: { type: String, required: true ,trim:true},
  imageUrl: { type: String, required: true,trim:true },
  userId: {type:mongoose.Schema.Types.ObjectId, ref:'UserDB',required: true},
  price: { type: Number, required: true },
  discountPrice: { type: Number, },
  countInStock: { type: Number,required: true,default:0 },
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