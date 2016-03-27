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
        var currentXLocation = newPlayer.x;
        newPlayer.handleInput(LEFT);
        expect(newPlayer.x).toBe(currentXLocation - COLUMN_WIDTH);
    });
    it("moves right with right command", function() {
        var currentXLocation = newPlayer.x;
        newPlayer.handleInput(RIGHT);
        expect(newPlayer.x).toBe(currentXLocation + COLUMN_WIDTH);
    });
});