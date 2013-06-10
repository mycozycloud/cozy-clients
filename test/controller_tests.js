// Generated by CoffeeScript 1.6.2
(function() {
  var client, cozyClients, should;

  should = require('chai').Should();

  cozyClients = require("../cozy_clients");

  client = cozyClients.controllerClient({
    host: 'localhost',
    port: 9002
  });

  client = client.drone;

  describe("Common requests", function() {
    describe("start", function() {
      it("When I send start request to controller", function(done) {
        var app,
          _this = this;

        app = {
          "name": "notes",
          "user": "notes",
          "domain": "localhost",
          "repository": {
            "type": "git",
            "url": "https://github.com/mycozycloud/cozy-notes.git"
          },
          "scripts": {
            "start": "server.coffee"
          }
        };
        return client.start(app, function(error, response, body) {
          response.statusCode.should.be.equal(200);
          _this.body = body;
          _this.error = error;
          return done();
        });
      });
      it("Then I get no error", function() {
        return should.equal(this.error, null);
      });
      return it("And body has field drone.", function() {
        return should.exist(this.body.drone);
      });
    });
    describe("get", function() {
      it("When I send get request to controller", function(done) {
        var _this = this;

        return client.get("notes", function(error, response, body) {
          response.statusCode.should.be.equal(200);
          _this.body = body;
          _this.error = error;
          return done();
        });
      });
      it("Then I get no error", function() {
        return should.equal(this.error, null);
      });
      return it("And body has field drone.", function() {
        return should.exist(this.body.drone);
      });
    });
    return describe("running", function() {
      it("When I send running request to controller", function(done) {
        var _this = this;

        return client.running(function(error, response, body) {
          response.statusCode.should.be.equal(200);
          _this.body = body;
          _this.error = error;
          return done();
        });
      });
      it("Then I get no error", function() {
        return should.equal(this.error, null);
      });
      return it("And body has field drone", function() {
        return should.exist(this.body.drone);
      });
    });
  });

}).call(this);
