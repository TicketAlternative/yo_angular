'use strict';

describe('Controller: SamplerouteCtrl', function () {

  // load the controller's module
  beforeEach(module('sampleAngularAppApp'));

  var SamplerouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SamplerouteCtrl = $controller('SamplerouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
