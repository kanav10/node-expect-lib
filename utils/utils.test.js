const expect = require('expect');

const utils = require('./utils');

it('should add two numbers',()=>{
    var res = utils.add(33,11);
   
    expect(res).toBe(44).toBeA('number');
    // if(res!= 44){
    //     throw new Error(`expected 44 ,got back ${res}.`);
    // }
});

it('should square the given numbers',()=>{
    var res = utils.square(2);

    expect(res).toBe(4).toBeA('number');
    // if( res!= 4){
    //     throw new Error('sorry bad request!!');
    // }
});

it('should expect some values',()=>{
    // expect(12).toNotBe(11);
    expect({name :"Kanav"}).toEqual({name:"Kanav"});
    expect({name:'kanav'}).toNotEqual({name:"mihika"});
    expect([1,2,3,4]).toInclude(4);
    expect([1,2,3,4,5]).toExclude(6);
});

it('should also expect some values out of it',()=>{
    expect({
        name:'kanav',
        age: 20,
        location:'new delhi'
    })
    .toInclude({
        age: 20,
    })
});

it('should verify the last and the first names ',()=>{
    var user = {
        location:'new delhi',
        age:'20',
    };
    var res = utils.setName(user, "kanav Malik");
    
    expect(user).toEqual(res);
    expect(res).toInclude({
        firstname :'kanav',
        lastname : 'Malik'
    });

});