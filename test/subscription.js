var paystack = require('../index')(process.env.KEY)
  , mocha = require('mocha')
  , expect = require('chai').expect
  ;

describe("Paystack Subscriptions", function() {

  var subscription_id, subscription_code, token;


  // List Subscription
  it("should list subscription", function(done) {
    paystack.subscription.list()
    .then(function(body){
      expect(body).to.have.property('data');
      expect(body.data).to.be.instanceof(Array);
      done();
    })
    .catch(function(error){
      return done(error);
    });    
  });
});
