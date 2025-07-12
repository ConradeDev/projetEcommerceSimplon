const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

module.exports.verifyToken = async (req, res, next) => {
    try {
        // 1. Vérifier la présence du header Authorization
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(403).json({
                message: "Token non reçu ou format invalide"
            });
        }

        // 2. Extraire le token
        let token = authHeader.split(' ')[1];

        // 3. Vérifier le token
        const decoded = jwt.verify(token, process.env.JWT_secret);

        // 4. Vérifier que le token contient bien les informations attendues
        if (!decoded.userId || !decoded.roleUser) {
            return res.status(403).json({
                message: "Token invalide - informations manquantes"
            });
        }

        // 5. Vérifier que l'utilisateur existe toujours
        req.user = await User.findOne({ _id: decoded.userId }).select("-password");
        

        // 6. Attacher les informations utilisateur à la requête
        // req.user = {
        //     userId: decoded.userId,
        //     roleUser: decoded.roleUser
        // };

        // 7. Passer au middleware suivant
        next();

    } catch (error) {
        // Gestion spécifique des erreurs JWT
        if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({
                message: "Token invalide"
            });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(403).json({
                message: "Token expiré"
            });
        }

        // Erreur inattendue
        console.error("Erreur d'authentification:", error);
        res.status(500).json({
            message: "Erreur d'authentification"
        });
    }
};

module.exports.adminVerifyToken=(req,res,next)=>{
    
}