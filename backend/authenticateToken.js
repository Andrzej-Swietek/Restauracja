const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null ) return res.send({"msg":"unauthorized"});

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.send({"msg":"invalid token"});
    req.user = user;
    next()
  })
}
module.exports = {
  authenticateToken
}
