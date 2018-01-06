var add = (a,b)=> a + b ;

var square = (x)=> x*x;

var setName = (user,fullName)=>{
    var names = fullName.split(' ');
    user.firstname = names[0];
    user.lastname = names[1];
    return user;
}


module.exports = {
    add,
    square,
    setName
}