describe('numberService', function () {

  describe("range", function() {
    beforeEach(module('test.services'));

    it("test range and [0,1,2]", inject(function(numberService) {
      expect(numberService.range(0,2)).toEqual([0,1,2]);
    }));

    it("test empty range", inject(function(numberService) {
      expect(numberService.range([])).toEqual([]);
    }));

    it("test length of arrays", inject(function(numberService) {
      expect(numberService.range(1,100).length).toEqual(100);
    }));

    it("test big array", inject(function(numberService) {
      expect(numberService.range(1,10000000).length).toEqual(10000000);
    }));

    it("test invalid input", inject(function(numberService) {
      expect(numberService.range(0,0)).toEqual([0]);
    }));

    it("test negative input", inject(function(numberService) {
      expect(numberService.range(-10,0).length).toEqual(11);
    }));

    it("test min is bigger than max", inject(function(numberService) {
      expect(numberService.range(50,10).length).toEqual(0);
    }));

  });

});
