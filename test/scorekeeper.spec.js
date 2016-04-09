describe("ScoreKeeper", function() {

    var newScoreKeeper;

    beforeEach(function () {
        newScoreKeeper = new ScoreKeeper();
    });

    it("starts off at 0", function() {
        expect(newScoreKeeper.getScore()).toBe(0);
    });

    it("should increment score by one after winning a game", function() {
        newScoreKeeper.winGame();
        expect(newScoreKeeper.getScore()).toBe(1);
    })
});