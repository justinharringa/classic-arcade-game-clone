describe("ScoreKeeper", function() {

    var newScoreKeeper;

    beforeEach(function () {
        newScoreKeeper = new ScoreKeeper();
    });

    it("starts off at 0", function() {
        expect(newScoreKeeper.getScore()).toBe(0);
    });
});