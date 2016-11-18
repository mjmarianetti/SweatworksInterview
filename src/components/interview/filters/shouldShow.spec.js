  describe("shouldShow", function() {
    beforeEach(module('test.filters'));

    //items,showAll,showEven
    it("test filter all", inject(function($filter) {
      let list = [1,2,3,4,5];
      let result = $filter('shouldShow')(list, true, false);
      expect(result.length).toEqual(5);
      expect(result).toEqual(list);

    }));

    it("test filter even", inject(function($filter) {
      let list = [1,2,3,4,5];
      let result = $filter('shouldShow')(list, false, true);
      expect(result.length).toEqual(2);
    }));

    it("test filter odd", inject(function($filter) {
      let list = [1,2,3,4,5];
      let result = $filter('shouldShow')(list, false, false);
      expect(result.length).toEqual(3);
    }));

    it("test empty", inject(function($filter) {
      let list = [];
      let result = $filter('shouldShow')(list, true, false);
      expect(result.length).toEqual(0);
      expect(result).toEqual(list);
    }));

  });
