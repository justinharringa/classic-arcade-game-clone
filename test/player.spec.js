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
    it("can't move off left side of screen", function() {
        newPlayer.handleInput(LEFT);
        newPlayer.handleInput(LEFT);
        newPlayer.handleInput(LEFT);
        expect(newPlayer.x).toBe(0);
    });
    it("moves right with right command", function() {
        var currentXLocation = newPlayer.x;
        newPlayer.handleInput(RIGHT);
        expect(newPlayer.x).toBe(currentXLocation + COLUMN_WIDTH);
    });
    it("can't move off right side of screen", function() {
        newPlayer.handleInput(RIGHT);
        newPlayer.handleInput(RIGHT);
        newPlayer.handleInput(RIGHT);
        expect(newPlayer.x).toBe(COLUMN_WIDTH * 4);
    });
    it("moves up with up command", function() {
        var currentYLocation = newPlayer.y;
        newPlayer.handleInput(UP);
        expect(newPlayer.y).toBe(currentYLocation - ROW_HEIGHT);
    });
    it("moves down with down command", function() {
        var currentYLocation = newPlayer.y;
        newPlayer.handleInput(DOWN);
        expect(newPlayer.y).toBe(currentYLocation + ROW_HEIGHT);
    });
});