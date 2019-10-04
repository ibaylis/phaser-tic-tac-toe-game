export default class Level2 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level2'
		});
	}
	preload() {
		this.load.image('star', '/assets/sprites/star.png');
		this.load.spritesheet('dude', '/assets/sprites/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		});
		
	}
	create() {
        const keyboard = this.input.keyboard;

        this.star = this.add
            .sprite(500, 200, 'star')
            .setScale(8, 8)
            .setDepth(1);
            //.setInteractive({dropZone: true })
            //.setOrigin(0, 0);
        this.player1 = this.physics.add
            .sprite(100, 300,'dude') // dynamic sprite 
            .setScale(3, 3)
            .setOrigin(0, 0)
            .setOffset(0, 8);

        this.player1.setSize(
            this.player1.body.width, 
            this.player1.body.height - 8, 
            false
        );
        console.log(this.player1);
        this.player2 = this.physics.add.sprite(200, 350,'dude') // Static sprite
        this.player2.setMass(25);
        this.physics.world.setBoundsCollision();
        this.player1.setCollideWorldBounds(true);
        this.player2.setCollideWorldBounds(true);
        //this.physics.world.setBounds(300, 0, 400, 300);
        this.physics.add.collider(this.player1, 
        this.player2, () => {
                console.log('scored a point');
            });
        this.player1.setImmovable();

        console.log(this.player1.body.blocked);
        console.log(this.player1.body.touching);

       
	}
	update(time, delta) {
        if (this.player1.body.blocked.down) {
            console.log('DIED');
        }
        if (this.player1.body.touching.up) {
            console.log('Player 2 fell on Player 1');
        }
	}
}

        // this.dude = this.add
        //     .sprite(100, 0, 'dude')
        //     .setDepth(2);
        // this.physics.add.existing(this.dude, 0); //dynamic sprite

        // this.physics.add.overlap(
        //     this.player1, 
        //     this.player2,
        //     () => {
        //         console.log('scored a point');
        //     }
        //this.physics.world.setBounds(300, 0, 400, 300);
        // var graphics = this.physics.world.debugGraphic;
        // this.physics.world.debugGraphic.setVisible();
        // this.physics.world.debugGraphic.setVisible(false);

        // this.input.on('dragenter', (pointer, gameObject, dropZone) => {
        //     dropZone.setTint(0x00ff00);
        // })

        // this.input.on('dragleave', (pointer, gameObject, dropZone) => {
        //     dropZone.clearTint();
        // })

        // this.input.on('drop', (pointer, gameObject, dropZone) => {
        //     gameObject.x = dropZone.x;
        //     gameObject.y = dropZone.y - 50;
        //     dropZone.clearTint();
        // });

        // this.input.mouse.disableContextMenu();

        // this.dude.on('dragstart', (pointer, dragX, dragY) => { 
        //     console.log('Drag Start')
        // })

        // this.dude.on('drag', (pointer, dragX, dragY) => { 
        //     console.log(`I'm dragging the player`)
        //     this.dude.setX(dragX);
        //     this.dude.setY(dragY);
        // })

        // this.dude.on('dragend', (pointer, dragX, dragY) => { 
        //     console.log('Drag End')
        // })

        // this.dude.on('pointerdown', (pointer) => {
        //    // this.dude.setX(this.dude.x + 50);
        // })

        // this.dude.on('pointerover', pointer => {
        //     this.dude.setScale(this.dude.scaleX + 1,
        //     this.dude.scaleY + 1);
        // })

        // this.dude.on('pointerout', (pointer) => { });



        // To register the clicks of the mouse
        // this.input.on('pointerdown', pointer => {
        //     console.log(pointer.y);
        //     //to move character around with left and right click

        //     if(pointer.rightButtonDown()) {
        //         this.dude.setX(pointer.y);
        //         this.dude.setY(pointer.x);
        //     } else {
        //         this.dude.setX(pointer.x);
        //         this.dude.setY(pointer.y);
        //     }

        // });

 // this.input.enabled = true;
        // this.dKey = keyboard.addKey('D');
        // this.aKey = keyboard.addKey('A');
        // this.wKey = keyboard.addKey('W');
        // this.sKey = keyboard.addKey('S');
        // this.spacebarKey = keyboard.addKey('SPACE');

        // this.cursorKeys = this.input.keyboard.createCursorKeys();

        // console.log(this.input.keyboard);


        // if(this.dKey.isDown || this.cursorKeys.right.isDown) {
        //     this.dude.setX(this.dude.x + 5);
        // }
        // if(this.aKey.isDown  || this.cursorKeys.left.isDown) {
        //     this.dude.setX(this.dude.x - 5);
        // }

        // if(this.wKey.isDown || this.cursorKeys.up.isDown) {
        //     this.dude.setY(this.dude.y - 5);
        // }
        // if(this.sKey.isDown || this.cursorKeys.down.isDown) {
        //     this.dude.setY(this.dude.y + 5);
        // }   
        // if(Phaser.Input.Keyboard.JustDown(this.spacebarKey)) {
        //     this.dude.setY(this.dude.y - 50);
        //     console.log(this.dude.y)
        // }   