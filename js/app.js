var COLUMN_WIDTH = 101;
var ROW_HEIGHT = 83;

var PLAYER_STARTING_X = COLUMN_WIDTH * 2;
var PLAYER_STARTING_Y = ROW_HEIGHT * 5 - ROW_HEIGHT / 2;

var LEFT = 'left';
var UP = 'up';
var RIGHT = 'right';
var DOWN = 'down';

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// Enemies our player must avoid
var Player = function() {
    // Variables applied to each of our instances go here
    this.moveToStart();

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.moveLeft = function () {
    if (this.x != 0) {
        this.x = this.x - COLUMN_WIDTH;
    }
};

Player.prototype.moveRight = function () {
    if (this.x != COLUMN_WIDTH * 4) {
        this.x = this.x + COLUMN_WIDTH;
    }
};

Player.prototype.moveToStart = function () {
    this.x = PLAYER_STARTING_X;
    this.y = PLAYER_STARTING_Y;
};

Player.prototype.moveUp = function() {
    if (this.y == ROW_HEIGHT / 2) {
        this.moveToStart();
    } else {
        this.y = this.y - ROW_HEIGHT;
    }
};

Player.prototype.moveDown = function() {
    if (this.y != PLAYER_STARTING_Y) {
        this.y = this.y + ROW_HEIGHT;
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

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
    
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Place the player object in a variable called player
var player = new Player();



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
