const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

const app = require('../app');
const config = require('../config');

chai.should();
chai.use(chaiHttp);


/*probando search */
describe('get search:', () => {
    it('Should response search 200 OK', (done) => {
        chai.request(app)
            .get('/api/search/MLA?q=celular&limit=5&offset=5')
            .set({ 'x-auth-token': config.token })
            .end((err, res) => {
                //console.log(res.body);
                expect(res).to.have.status(200);
                expect(res.body).to.have.all.keys('paging', 'categories','items');
                done();
            });
    });
    it('Should response search 200 OK dont limit', (done) => {
        chai.request(app)
            .get('/api/search/MLA?q=celular&offset=5')
            .set({ 'x-auth-token': config.token })
            .end((err, res) => {
                //console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Should response search 200 OK dont offset', (done) => {
        chai.request(app)
            .get('/api/search/MLA?q=celular&limit=5')
            .set({ 'x-auth-token': config.token })
            .end((err, res) => {
                //console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Should response search mock 200 OK', (done) => {
        chai.request(app)
            .get('/api/search/MLA?q=celular&limit=5&offset=5')
            .set({ 'x-auth-token': config.tokenMock })
            .end((err, res) => {
                // console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Should response search not token', (done) => {
        chai.request(app)
            .get('/api/search/MLA?q=celular&limit=5&offset=5')
            .end((err, res) => {
                // console.log(res.body);
                expect(res).to.have.status(401);
                done();
            });
    });
    it('Should response search bad site', (done) => {
        chai.request(app)
            .get('/api/search/MLx?q=celular&limit=5&offset=5')
            .set({ 'x-auth-token': config.token })
            .end((err, res) => {
                // console.log(res.body);
                expect(res).to.have.status(400);
                done();
            });
    });
    it('Should response search bad token', (done) => {
        chai.request(app)
            .get('/api/search/MLx?q=celular&limit=5&offset=5')
            .set({ 'x-auth-token': 'xxxxxx' })
            .end((err, res) => {
                // console.log(res.body);
                expect(res).to.have.status(401);
                done();
            });
    });
});