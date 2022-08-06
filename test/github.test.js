let expect = require('chai').expect;
let request = require('request');

describe('GitHub - Account - Status and content', function () {
    // describe function - groups tests together
    describe('GitHub account page', function () {

        //It function - test only one specific behavior
        it('status', function (done) {
            request('http://localhost:3001/github/octocat',
                function (error, response, body) {
                    //Chai - Should, expect, assert
                    expect(response.statusCode).to.equal(200);
                    done();
                });
        });

        it('content', function (done) {
            request('http://localhost:3001/github/octocat',
                function (error, response, body) {
                    expect(body).to.be.a('string');
                    done();
                });
        });
    });

    // describe function - groups tests together
    describe('GitHub Account List Repos', function () {

        //It function - test only one specific behavior
        it('status', function (done) {
            request('http://localhost:3001/github/octocat,repos',
                function (error, response, body) {
                    //Chai - Should, expect, assert
                    expect(response.statusCode).to.equal(200);
                    done();
                });
        });

        it('content', function (done) {
            request('http://localhost:3001/github/octocat,repos',
                function (error, response, body) {
                    expect(body).to.be.a('string');
                    done();
                });
        });
    });
});