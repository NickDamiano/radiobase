'use strict';

describe('Controller: StrongerThanDirtCtrl', function () {

  // load the controller's module
  beforeEach(module('radiobase10App'));

  var StrongerThanDirtCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StrongerThanDirtCtrl = $controller('StrongerThanDirtCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
