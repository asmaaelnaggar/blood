const JWT=require("jsonwebtoken");
const JWT_Sercet="asmaa123456";

module.exports = async(req, res, next)=> {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
   jwt.verify(req.headers.authorization.split(' ')[1], salt, function (err, decode) {
     if (err) req.user = undefined;
     req.user = decode; next();       // If the request comes from a valid, logged in user we set the req.user...
   });                                 // ...variable  to the user's data, such as uuid and username
  } else {
   req.user = undefined; next();       // If the user is not valid or is not logged in, req.user is undefined
  }
};

// module.exports = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     console.log(token)
//     JWT.verify(token, JWT_Sercet, (err, decode) => {
//       if (err) {
//         return res.status(401).send({
//           success: false,
//           message: "Auth Failed",
//         });
//       } else {
//         req.body.userId = decode.userId;
//         next();
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(401).send({
//       success: false,
//       error,
//       message: "Auth Failedd",
//     });
//   }
// };
