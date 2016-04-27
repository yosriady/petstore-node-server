'use strict';

exports.getInventory = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  
  examples['application/json'] = {
  "key" : 123
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.placeOrder = function(args, res, next) {
  /**
   * parameters expected in the args:
   * body (Order)
   **/

var examples = {};
  
  examples['application/json'] = {
  "petId" : 123456789,
  "quantity" : 123,
  "id" : 123456789,
  "shipDate" : "2016-04-27T14:24:37.529+0000",
  "complete" : true,
  "status" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.getOrderById = function(args, res, next) {
  /**
   * parameters expected in the args:
   * orderId (Long)
   **/

var examples = {};
  
  examples['application/json'] = {
  "petId" : 123456789,
  "quantity" : 123,
  "id" : 123456789,
  "shipDate" : "2016-04-27T14:24:37.543+0000",
  "complete" : true,
  "status" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.deleteOrder = function(args, res, next) {
  /**
   * parameters expected in the args:
   * orderId (Long)
   **/

var examples = {};
  

  
  res.end();
}
