const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.headers['authorization']) {
    const token = req.headers['authorization'].split(' ')[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
<<<<<<< HEAD
        // res.json({
        //   success: false,
        //   message: 'Failed to authenticate token',
        // });
=======
         res.json({
           success: false,
           message: 'Failed to authenticate token',
        });
>>>>>>> e53a3354b0f96583d5fd78b29b41ed466c56503e
        next(Error('Failed to authenticate token'));
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
<<<<<<< HEAD
    // res.status(403).json({
    //   status: false,
    //   message: 'No token provided',
    // });
=======
    res.status(403).json({
      status: false,
      message: 'No token provided',
     });
>>>>>>> e53a3354b0f96583d5fd78b29b41ed466c56503e

    next(Error('No token provided'));
  }
};
