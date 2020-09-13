const jwt = require("jsonwebtoken");
//Verifir token

let validateToken = (req, res, next) => {
  let accessToken = req.get("AccessToken");

  jwt.verify(accessToken, process.env.SEED, (err, decode) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "Token invalido.",
        },
      });
    }

    req.user = decode.user;
    next();
  });
};

module.exports = {
    validateToken
}