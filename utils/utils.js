var add = (a,b)=> a + b ;

var square = (x)=> x*x;

var setName = (user,fullName)=>{
    var names = fullName.split(' ');
    user.firstname = names[0];
    user.lastname = names[1];
    return user;
};

var asyncAdd =(a,b,callback)=>{
setTimeout(()=>{
    callback(a+b);
},1000);
};

var asyncSquare =(x,callback)=>{
    setTimeout(()=>{
        callback(x*x);
    },1000);
};


module.exports = {
    add,
    square,
    setName,
    asyncAdd,
    asyncSquare
}