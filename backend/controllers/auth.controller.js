const User=require('../models/user.model');
const bcrypt=require('bcryptjs');
const generateToken=require('../services/generateToken');

const Joi=require('joi');

const JSchema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    roleUser: Joi.string()
  });

module.exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {

        const { error, value } = JSchema.validate(req.body);

        if (error) {
          return res.status(400).json({ 
            message:"erreurr de validation", 
            details: error.details[0].message  });
        }
        const { firstName, lastName, email, password, roleUser } = value;
        const user = new User({
          firstName, 
          lastName,
          email,
          password: hash
        });
        user.save()
          .then(() => res.status(201).json({ 
            message: 'Utilisateur créé !'
        }))
         .catch(error => res.status(400).json({ message: `${error} user no save` }));
      })
      .catch(error => res.status(500).json({ error }));
  };


  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});


  module.exports.login=(req,res,next)=>{
    const { error, value } = loginSchema.validate(req.body);

        if (error) {
          return res.status(400).json({ 
            message:"erreurr de connexion", 
            details: error.details[0].message  });
          }

       const { email, password } = value;
    User.findOne({email})
    .then((user)=>{
        if (!user) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
        }

        bcrypt.compare(req.body.password,user.password)
        .then((valid) => {
            if (!valid) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
            }
            const token=generateToken(user._id,user.roleUser);
            res.status(201).json({ 
            message: 'User authentify!',
            userId:user._id,
            token
           })
        
        })
        .catch(error => res.status(500).json({ message: `${error} Password incorect` }))
    })
    .catch(error => res.status(400).json({ message: `${error} user no find` }))
  };