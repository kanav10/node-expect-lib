const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;
describe('server',()=>{
    describe('/',()=>{
        it('should return hello world response',(done)=>{
            request(app)
            .get('/')
            .expect(404)
            .expect((res)=>{
                expect(res.body).toInclude({
                    error : 'Page not found'
                });
                
            })
            .end(done);
        });
        

    });
    describe('/users',()=>{
        it('should return the user object',(done)=>{
            request(app)
            .get('/users')
            .expect(200)
            .expect((res)=>{
                expect(res.body).toInclude({
                    name:"kanav",
                    age:20
                });
            })
            .end(done);  
        });
    });
    
});
