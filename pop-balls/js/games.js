let i = 0, balloon;
var games = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "games" });
    },
    init: function() {},
    preload: function() {
        this.load.image("balloon", "./balloon.png");
    },
    create: function() {
        allBalloon = this.add.group();
        allBalloon.enableBody = true;
    },
    update: function() {
        function randomNumbers(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        let X = randomNumbers(70, 530);
        let Y = randomNumbers(100, 900);

        // allBalloon = [];
        if(i < 25) {
            allBalloon.create(X, Y, "balloon").setScale(.5);
            // balloon = this.add.image(X, Y, "balloon").setScale(.5);
            // allBalloon.push(balloon.setScale(.3));
            i += 1;
        }
        if(game) {
            allBalloon.y -= 10; 
        }
        // balloon.y -= 10;
        // console.log(Array.from(document.querySelectorAll(balloon)))
    }
});