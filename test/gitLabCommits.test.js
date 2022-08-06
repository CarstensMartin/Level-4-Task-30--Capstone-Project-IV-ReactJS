let expect = require('chai').expect;
let request = require('request');

describe('GitLab - Commit -Status and content List Last 5 Commits', function () {
    // describe function - groups tests together
    describe('Git Lab Commits page', function () {

        //It function - test only one specific behavior
        it('status', function (done) {
            request('http://localhost:3001/gitlabcommits/18010105',
                function (error, response, body) {
                    //Chai - Should, expect, assert
                    expect(response.statusCode).to.equal(200);
                    done();
                });
        });

        it('content', function (done) {
            request('http://localhost:3001/gitlabcommits/18010105',
                function (error, response, body) {
                    expect(body).to.be.a('string');
                    done();
                });
        });
    });
});