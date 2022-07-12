var menu = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "menu" });
    },
    init: function() {},
    preload: function() {
        this.load.image("start-game", "./start.png");
    },
    create: function() {
        startGame = this.add.image(300, 450, "start-game").setScale(.2);
        startGame.setInteractive();
        startGame.on("pointerdown", () => {
            this.scene.start("games");
        })
    },
    update: function() {}
});