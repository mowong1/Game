// We create our only state
var mainState = {
    // Here we add all the functions we need for our state
    // For this project we will just have 3
    preload: function () {
        // This function will be executed at the beginning
        // That's where we load the game's assets
        // Load the image
        game.load.image("baymax","baymax.jpg");
    }
    , create: function () {
        // This function is called after the 'preload' function 
        // Here we set up the game, display sprites, etc.
        
        this.keyboard = game.input.keyboard.createCursorKeys();
        this.player = game.add.sprite(300,0,"baymax");
        this.player.scale.setTo(1.5,1.5);
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 0;
        
        this.player.body.collideWorldBounds = true;

    }
    , update: function () {
        this.player.body.velocity.x = 0;
        if( this.keyboard.right.isDown){
            this.player.body.velocity.x = 300;
        } else if(this.keyboard.left.isDown) {
            this.player.body.velocity.x = -300;
        }if( this.keyboard.down.isDown) {
            this.player.body.velocity.y = 300;
        }if( this.keyboard.up.isDown) {
            this.player.body.velocity.y = -sss300;
        }
        // This contains Game Logic 
    }
};
// We initialize Phaser
var game = new Phaser.Game(800, 800, Phaser.AUTO, '');
// And we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');