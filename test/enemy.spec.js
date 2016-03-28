describe("Enemy", function() {

    var newEnemy;

    beforeEach(function () {
        newEnemy = new Enemy();
    });

    it("starts off of the canvas", function() {
        expect(newEnemy.x).toBeLessThan(0);
    });
    it("should update by using speed", function() {
        newEnemy.x = 0;
        newEnemy.speed = 500;
        newEnemy.update(1);
        expect(newEnemy.x).toBe(500);
    });
});