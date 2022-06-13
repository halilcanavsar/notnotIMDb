const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const bearerHeader = req.headers.token;
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, process.env.SECRET_KEY, (err, user) => {
      if (err) {

        return res.status(403).json({ message: 'Token is invalid' });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = verifyToken;