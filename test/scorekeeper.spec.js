describe("ScoreKeeper", function() {

    var newScoreKeeper;

    beforeEach(function () {
        newScoreKeeper = new ScoreKeeper();
    });

    it("starts off at 0", function() {
        expect(newScoreKeeper.getScore()).toBe(0);
    });

    it("should increment score by one after winning a game", function() {
        newScoreKeeper.addWin();
        expect(newScoreKeeper.getScore()).toBe(1);
    });

    it("should have a current score of 2 after winning 2 games", function() {
        newScoreKeeper.addWin();
        newScoreKeeper.addWin();
        expect(newScoreKeeper.getScore()).toBe(2);
    });
});