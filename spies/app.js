var db = require('./db');
var handleSignup = (email,password) =>{
//check if email already exists
//save the user
    db.saveUser({email,password}) //this is being passed in as the user argument
//send the welcome email
};

module.exports = {
    handleSignup
}