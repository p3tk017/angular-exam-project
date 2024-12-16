const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports.verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(403).json({ message: 'Access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);    
    const user = await User.findById(decoded.id);
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    
    res.status(401).json({ success: false, message: 'Invalid token' });
}
};
