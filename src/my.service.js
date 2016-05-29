(function(angular) {
  "use strict";

  angular.module("myApp")
    .service("MyService", MyService);

  function MyService() {
    this.square = square;

    function square(x) {
      return x * x;
    }
  }
})(angular);
