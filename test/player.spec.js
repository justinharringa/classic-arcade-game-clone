describe("Player", function() {

    var newPlayer;
    var newScoreKeeper;

    beforeEach(function () {
        newScoreKeeper = new ScoreKeeper();
        newPlayer = new Player(newScoreKeeper);
    });

    it("starts in the middle column", function() {
        expect(newPlayer.currentColumn).toBe(PLAYER_STARTING_COLUMN);
    });
    it("starts in the bottom row", function() {
        expect(newPlayer.currentRow).toBe(PLAYER_STARTING_ROW);
    });
    it("moves left with left command", function() {
        newPlayer.moveLeft();
        expect(newPlayer.currentColumn).toBe(PLAYER_STARTING_COLUMN - 1);
    });
    it("can't move off left side of screen", function() {
        newPlayer.moveLeft();
        newPlayer.moveLeft();
        newPlayer.moveLeft();
        expect(newPlayer.currentColumn).toBe(FIRST_COLUMN);
    });
    it("moves right with right command", function() {
        newPlayer.moveRight();
        expect(newPlayer.currentColumn).toBe(PLAYER_STARTING_COLUMN + 1);
    });
    it("can't move off right side of screen", function() {
        newPlayer.moveRight();
        newPlayer.moveRight();
        newPlayer.moveRight();
        expect(newPlayer.currentColumn).toBe(LAST_COLUMN);
    });
    it("moves up with up command", function() {
        newPlayer.moveUp();
        expect(newPlayer.currentRow).toBe(PLAYER_STARTING_ROW - 1);
    });
    it("moves back to the bottom if he respawns", function() {
        newPlayer.moveUp();
        newPlayer.moveUp();
        newPlayer.spawn();
        expect(newPlayer.currentRow).toBe(PLAYER_STARTING_ROW);
    });
    it("moves back to the middle if he respawns", function() {
        newPlayer.moveRight();
        newPlayer.moveRight();
        newPlayer.spawn();
        expect(newPlayer.currentColumn).toBe(PLAYER_STARTING_COLUMN);
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
    it("adds to score keeper's score if he wins", function() {
        newPlayer.moveUp();
        newPlayer.moveUp();
        newPlayer.moveUp();
        newPlayer.moveUp();
        newPlayer.moveUp();
        expect(newScoreKeeper.getScore()).toBe(1);
    });
    it("starts with 3 lives", function() {
        expect(newPlayer.lives).toBe(3);
    });
    it("loses a life to respawn", function() {
        newPlayer.die();
        expect(newPlayer.lives).toBe(2);
    });
    it("gets 3 lives again after losing them all", function() {
        newPlayer.die();
        newPlayer.die();
        newPlayer.die();
        expect(newPlayer.lives).toBe(3);
    });
});