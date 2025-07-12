const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../services/generateToken");

const Joi = require("joi");

const JSchema = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  roleUser: Joi.string(),
});

module.exports.signup = async (req, res, next) => {
  // 1. Validation Joi en premier
  const { error, value } = JSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Erreur de validation",
      details: error.details[0].message,
    });
  }

  const { firstName, lastName, email, password, roleUser } = value;

  try {
    // 2. Vérifier si l'utilisateur existe déjà
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "Email déjà utilisé" }); // ✅ return
    }

    // 3. Hacher le mot de passe
    const hash = await bcrypt.hash(password, 10);

    // 4. Créer l'utilisateur
    const user = new User({
      firstName,
      lastName,
      email,
      password: hash,
      roleUser,
    });

    await user.save();

    // 5. Générer le token et renvoyer UNE SEULE RÉPONSE
    const token = generateToken(user._id, user.roleUser);
    res.status(201).json({
      message: "Utilisateur créé avec succès",
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        roleUser: user.roleUser,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

module.exports.login = (req, res, next) => {
  const { error, value } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "erreurr de connexion",
      details: error.details[0].message,
    });
  }

  const { email, password } = value;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "Paire login/mot de passe incorrecte" });
      }

      bcrypt
        .compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: "Paire login/mot de passe incorrecte" });
          }
          const token = generateToken(user._id, user.roleUser);
          res.status(201).json({
            message: "User authentify!",
            user: {
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              roleUser: user.roleUser,
            },
            token,
          });
        })
        .catch((error) =>
          res.status(500).json({ message: `${error} Password incorect` })
        );
    })
    .catch((error) =>
      res.status(400).json({ message: `${error} user no find` })
    );
};


module.exports.profile= async (req,res)=>{
  res.json(req.user);
}
