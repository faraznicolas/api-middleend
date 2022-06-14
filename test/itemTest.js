const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

const app = require('../app');
const config = require('../config');

chai.should();
chai.use(chaiHttp);


/*probando item */
describe('get Item:', () => {
    it('Should response item 200 OK', (done) => {
        chai.request(app)
            .get('/api/item/MLA916148161')
            .set({ 'x-auth-token': config.token })
            .end((err, res) => {
                //console.log(res.body);
                expect(res).to.have.status(200);
                expect(res.body).to.have.all.keys('author', 'item');
                done();
            });
    });
    it('Should response item mock 200 OK', (done) => {
        chai.request(app)
            .get('/api/item/MLA916148161')
            .set({ 'x-auth-token': config.tokenMock })
            .end((err, res) => {
                // console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Should response item not token', (done) => {
        chai.request(app)
            .get('/api/item/MLA916148161')
            .end((err, res) => {
                // console.log(res.body);
                expect(res).to.have.status(401);
                done();
            });
    });
    it('Should response item not item', (done) => {
        chai.request(app)
            .get('/api/item/.')
            .set({ 'x-auth-token': config.token })
            .end((err, res) => {
                // console.log(res.body);
                expect(res).to.have.status(400);
                done();
            });
    });
});