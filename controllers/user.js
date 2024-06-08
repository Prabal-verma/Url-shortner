const {v4  : uuidv4} = require('uuid');
const user = require('../models/user.js');
const User = require('../models/user.js');
const {setUser} = require('../service/auth.js');

async function handleUserSignup(req, res) {
  const {name, email, password} = req.body;
  await User.create({name, email, password});
  return res.redirect('/login');  

}
async function handleUserLogin(req, res) {
  const {email, password} = req.body;
  const user = await User.findOne({email, password})
  if(!user){
    return res.status(401).send("Invalid credentials");
  }
  const token = setUser(user);
  console.log("hello ji");
  res.cookie("uid", token);
  return res.redirect('/');
  

}


module.exports = {
  handleUserSignup,
  handleUserLogin
};