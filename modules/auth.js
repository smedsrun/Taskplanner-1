
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const username = decodedToken.username;
    const password = decodeToken.password;
    if (req.body.username && req.body.userId !== userId) {
      throw 'Invalid user name';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};




module.exports = authorizator