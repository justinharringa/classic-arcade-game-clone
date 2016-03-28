describe("Enemy", function() {

    var newEnemy;

    beforeEach(function () {
        newEnemy = new Enemy();
    });

    it("starts off of the canvas", function() {
        expect(newEnemy.x).toBeLessThan(0);
    });

});