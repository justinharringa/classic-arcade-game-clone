var COLUMN_WIDTH = 101;
var ROW_HEIGHT = 83;

// Grid constants
// NOTE: The columns / rows start at 0 from the top left part of the canvas
var PLAYER_STARTING_COLUMN = 2;
var PLAYER_STARTING_ROW = 5;
var NUM_COLUMNS = 5;
var FIRST_COLUMN = 0;
// needs to be 0-based
var LAST_COLUMN = NUM_COLUMNS - 1;
var CANVAS_WIDTH = COLUMN_WIDTH * NUM_COLUMNS;

// These offsets put the enemy and players in reasonable positions on
// the board
var ENEMY_Y_OFFSET = ROW_HEIGHT / 4;
var PLAYER_Y_OFFSET = ROW_HEIGHT / 2;

var ENEMY_IMAGE_MARGIN = 1;
var PLAYER_IMAGE_MARGIN = 20;

var LEFT = 'left';
var UP = 'up';
var RIGHT = 'right';
var DOWN = 'down';

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.spawn();
    // Select a speed between 20 and 300
    this.speed = Math.ceil(Math.random() * 300) + 20;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.spawn = function() {
    // Enemy should start off screen so make them go back one complete column
    this.x = -COLUMN_WIDTH;
    // Select one of the 3 top rows to spawn in
    this.currentRow = Math.ceil(Math.random() * 3);

    this.y = ROW_HEIGHT * this.currentRow - ENEMY_Y_OFFSET;
};

Enemy.prototype.shouldRespawn = function() {
    return this.x > CANVAS_WIDTH;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.shouldRespawn()) {
        this.spawn();
    }
    // Multiply any movement by the dt parameter which will ensure the game runs
    // at the same speed for all computers.
    this.x = this.x + this.speed * dt;
};

Enemy.prototype.rightBoundary = function() {
    return this.x + COLUMN_WIDTH - ENEMY_IMAGE_MARGIN;
};

Enemy.prototype.leftBoundary = function() {
    return this.x + ENEMY_IMAGE_MARGIN;
};

Enemy.prototype.canBitePlayer = function(player) {
    function tailIsTouching(enemy, player) {
        return (enemy.rightBoundary() >= player.rightBoundary() &&
            enemy.leftBoundary() <= player.rightBoundary());
    }

    function headIsTouching(enemy, player) {
        return (enemy.rightBoundary() >= player.leftBoundary() &&
            enemy.leftBoundary() <= player.rightBoundary());
    }

    return (headIsTouching(this, player) ||
        tailIsTouching(this, player)) &&
        this.currentRow == player.currentRow;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(scoreKeeper) {
    // Variables applied to each of our instances go here
    this.spawn();
    this.scoreKeeper = scoreKeeper;
    this.lives = 3;

    // The image/sprite for our players, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};

Player.prototype.leftBoundary = function() {
    return this.getX() + PLAYER_IMAGE_MARGIN;
};

Player.prototype.rightBoundary = function() {
    return this.getX() + COLUMN_WIDTH - PLAYER_IMAGE_MARGIN;
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // Currently a null op... Relying on moveXXXX() methods and render()
};

Player.prototype.moveLeft = function () {
    if (this.currentColumn != FIRST_COLUMN) {
        this.currentColumn--;
    }
};

Player.prototype.moveRight = function () {
    if (this.currentColumn != LAST_COLUMN) {
        this.currentColumn++;
    }
};

Player.prototype.spawn = function () {
    this.currentColumn = PLAYER_STARTING_COLUMN;
    this.currentRow = PLAYER_STARTING_ROW;
};

Player.prototype.moveUp = function() {
    if (this.currentRow == 1) {
        this.spawn();
        this.scoreKeeper.addWin();
    } else {
        this.currentRow--;
    }
};

Player.prototype.moveDown = function() {
    if (this.currentRow != PLAYER_STARTING_ROW) {
        this.currentRow++;
    }
};

Player.prototype.handleInput = function(pressedKey) {
    if (pressedKey == LEFT) {
        this.moveLeft();
    } else if (pressedKey == RIGHT) {
        this.moveRight();
    } else if (pressedKey == UP) {
        this.moveUp();
    } else if (pressedKey == DOWN) {
        this.moveDown();
    }
};

Player.prototype.getX = function() {
    return COLUMN_WIDTH * this.currentColumn;
};

Player.prototype.getY = function() {
    return ROW_HEIGHT * this.currentRow - PLAYER_Y_OFFSET;
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.getX(), this.getY());
};


// ScoreKeeper class
var ScoreKeeper = function() {
    this.resetScore();
};

ScoreKeeper.prototype.getScore = function() {
    return this.currentScore;
};

ScoreKeeper.prototype.addWin = function() {
    this.currentScore++;
};

ScoreKeeper.prototype.resetScore = function() {
    this.currentScore = 0;
};

// Draw the score on the screen, required method for game
ScoreKeeper.prototype.render = function() {
    currentScore.innerHTML = this.getScore();
};


// LivesRenderer class
var LivesRenderer = function(player) {
    this.player = player;
};

LivesRenderer.prototype.render = function() {
    currentLives.innerHTML = this.player.lives;
};


// Now instantiate objects.
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var scoreKeeper = new ScoreKeeper();
var player = new Player(scoreKeeper);
var livesRenderer = new LivesRenderer(player);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: LEFT,
        38: UP,
        39: RIGHT,
        40: DOWN
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
