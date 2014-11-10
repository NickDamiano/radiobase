'use strict';

describe('Controller: KoopCtrl', function () {

  // load the controller's module
  beforeEach(module('radiobase10App'));

  var KoopCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KoopCtrl = $controller('KoopCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
