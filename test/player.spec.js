describe("Player", function() {

    var newPlayer;

    beforeEach(function () {
        newPlayer = new Player();
    });

    it("starts in the middle column", function() {
        expect(newPlayer.x).toBe(columnWidth * 2);
    });
    it("starts in the bottom row", function() {
        expect(newPlayer.y).toBe(rowHeight * 5 - rowHeight / 2);
    });
});