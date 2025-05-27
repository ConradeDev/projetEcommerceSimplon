const jwt=require('jsonwebtoken');
const maxAge=1*24*60*60*1000;


module.exports.generateToken=(userID,roleUsers)=>jwt.sign(
            {userId:userID , roleUser: roleUsers },
            process.env.JWT_secret,
            {expiresIn: maxAge}
        ); 