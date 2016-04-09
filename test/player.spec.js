describe("Player", function() {

    var newPlayer;

    beforeEach(function () {
        newPlayer = new Player();
    });

    it("starts in the middle column", function() {
        expect(newPlayer.x).toBe(PLAYER_STARTING_X);
    });
    it("starts in the bottom row", function() {
        expect(newPlayer.currentRow).toBe(PLAYER_STARTING_ROW);
    });
    it("moves left with left command", function() {
        var currentXLocation = newPlayer.x;
        newPlayer.moveLeft();
        expect(newPlayer.x).toBe(currentXLocation - COLUMN_WIDTH);
    });
    it("can't move off left side of screen", function() {
        newPlayer.moveLeft();
        newPlayer.moveLeft();
        newPlayer.moveLeft();
        expect(newPlayer.x).toBe(0);
    });
    it("moves right with right command", function() {
        var currentXLocation = newPlayer.x;
        newPlayer.moveRight();
        expect(newPlayer.x).toBe(currentXLocation + COLUMN_WIDTH);
    });
    it("can't move off right side of screen", function() {
        newPlayer.moveRight();
        newPlayer.moveRight();
        newPlayer.moveRight();
        expect(newPlayer.x).toBe(COLUMN_WIDTH * 4);
    });
    it("moves up with up command", function() {
        newPlayer.moveUp();
        expect(newPlayer.currentRow).toBe(PLAYER_STARTING_ROW - 1);
    });
    it("moves to the bottom if he wins (gets to the top row)", function() {
        newPlayer.moveUp();
        newPlayer.moveUp();
        newPlayer.moveUp();
        newPlayer.moveUp();
        newPlayer.moveUp();
        expect(newPlayer.currentRow).toBe(PLAYER_STARTING_ROW);
    });
    it("moves to the starting tile in middle if he wins (gets to the top row)", function() {
        // need to move right to get out of middle column
        newPlayer.moveRight();
        newPlayer.moveUp();
        newPlayer.moveUp();
        newPlayer.moveUp();
        newPlayer.moveUp();
        newPlayer.moveUp();
        expect(newPlayer.x).toBe(PLAYER_STARTING_X);
    });
    it("moves down with down command", function() {
        // need to go up then down since player can't move off bottom
        newPlayer.moveUp();
        newPlayer.moveDown();
        expect(newPlayer.currentRow).toBe(PLAYER_STARTING_ROW);
    });
    it("can't move off bottom of screen", function() {
        newPlayer.moveDown();
        expect(newPlayer.currentRow).toBe(PLAYER_STARTING_ROW);
    });
});