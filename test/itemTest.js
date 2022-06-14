const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
var nock = require('nock');

const app = require('../app');
const config = require('../config');

chai.should();
chai.use(chaiHttp);
const dataItem = require('../mocks/dataMeliItemId.json');
const dataItemDescription = require('../mocks/dataMeliItemIdDescription.json');
const dataUser = require('../mocks/dataMeliUser.json');


/*probando item */
describe('get Item:', () => {
    beforeEach(() => {
        nock(process.env.BASE_URL)
            .get('/items/MLA627715476')
            .reply(200, dataItem);
        nock(process.env.BASE_URL)
            .get('/items/MLA627715476/description')
            .reply(200, dataItemDescription);
        nock(process.env.BASE_URL)
            .get('/users/2890353')
            .reply(200, dataUser);
    });
    afterEach(() => {
        nock.cleanAll();
    })

    it('Should response item 200 OK', (done) => {
        chai.request(app)
            .get('/api/item/MLA627715476')
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
            .get('/api/item/MLA627715476')
            .set({ 'x-auth-token': config.tokenMock })
            .end((err, res) => {
                // console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Should response item not token', (done) => {
        chai.request(app)
            .get('/api/item/MLA627715476')
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