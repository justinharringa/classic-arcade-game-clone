describe("Enemy", function() {

    var newEnemy;

    beforeEach(function () {
        newEnemy = new Enemy();
    });

    it("starts off of the canvas", function() {
        expect(newEnemy.x).toBeLessThan(0);
    });
    it("update() should move them by speed value if dt is 1", function() {
        newEnemy.x = 0;
        newEnemy.speed = 50;
        // update using 1 because we multiply dt by speed
        newEnemy.update(1);
        expect(newEnemy.x).toBe(50);
    });
    it("should respawn if moved past screen", function() {
        newEnemy.x = CANVAS_WIDTH + 1;
        expect(newEnemy.shouldRespawn()).toBe(true);
    });
    it("should be able to bite player if within range", function() {
        // enemy is basically on top of player
        newEnemy.x = COLUMN_WIDTH * 3;
        player = new Player();
        player.moveUp();
        player.moveUp();
        expect(newEnemy.canBitePlayer(player)).toBe(true);
    });
});