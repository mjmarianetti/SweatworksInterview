describe("testController", function() {
  beforeEach(module('test.controllers'));
  beforeEach(function() {
      module('test.services');
    });


  let testController;

  beforeEach(inject(function ($controller,numberService) {
    testController = $controller('testController', {
      numberService: numberService
    });
  }));

  it('should initialize correctly', function () {
    expect(testController.minNumber).toEqual(0);
    expect(testController.maxNumber).toEqual(10);
    expect(testController.range).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
  });

  it('should change range correctly when minNumber change', function () {
    testController.minNumber = 2;
    testController.change();
    expect(testController.range).toEqual([2,3,4,5,6,7,8,9,10]);
  });

  it('should change range correctly when maxNumber change', function () {
    testController.maxNumber = 15;
    testController.change();
    expect(testController.range).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });



});
