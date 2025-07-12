const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true,trim:true},
  lastName: { type: String, required: true,trim:true},
  email: { type: String, required: true, unique: true,trim:true},
  password: { type: String, required: true ,trim:true},
  roleUser: { type: String, 
        enum: ['Customer', 'Admin'], 
        default: 'Customer',
    }
},
{
    timestamps:true
}
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('UserDB', userSchema);