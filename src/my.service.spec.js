"use strict";

describe("Service: myService", function() {

  beforeEach(module("myApp"));

  var myService;

  beforeEach(inject(function($httpBackend, _MyService_){
    myService = _MyService_;
  }));

  describe("square function", function() {

    it("should return a number", function() {
      expect(angular.isNumber(myService.square(1))).toBe(true);
    });

    it("returns the square of a number", function() {
      expect(myService.square(-1)).toBe(1);
      expect(myService.square(0)).toBe(0);
      expect(myService.square(5)).toBe(25);
      expect(myService.square(10)).toBe(100);
    });

  });

});
