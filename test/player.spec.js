describe("Player", function() {

    var newPlayer;

    beforeEach(function () {
        newPlayer = new Player();
    });

    it("starts in the middle column", function() {
        expect(newPlayer.x).toBe(COLUMN_WIDTH * 2);
    });
    it("starts in the bottom row", function() {
        expect(newPlayer.y).toBe(ROW_HEIGHT * 5 - ROW_HEIGHT / 2);
    });
    it("moves left with left command", function() {
        newPlayer.handleInput(LEFT);
        expect(newPlayer.x).toBe(COLUMN_WIDTH);
    });
});