export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		this.load.audio('intro_music', ['/assets/audio/01-Opening.ogg']);
		this.load.audio('coin_sound', ['/assets/audio/sfx_coin_double1.wav']);
		this.load.audio('winning_sound', ['/assets/audio/sfx_sounds_powerup4.wav']);
		this.load.image('background', '/assets/sprites/titlescreen/background.png');
		this.load.image('title', '/assets/sprites/titlescreen/title.png');

		this.load.image('box_blank', '/assets/sprites/box_blank.png');
		this.load.image('box_xblue', '/assets/sprites/box_xblue.png');

		this.load.image('box_ored', '/assets/sprites/box_ored.png');
		this.load.image('boardbg', '/assets/sprites/boardbg.png');

		this.load.image('playagain', '/assets/sprites/board/playagain.png');
		this.load.image('wins', '/assets/sprites/board/wins.png');

		this.load.image('xIcon', '/assets/sprites/board/x.png');
		this.load.image('oIcon', '/assets/sprites/board/o.png');
	}
	create() {
		this.gameBoard = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
		this.currentPlayer = true;

		/*===================================
		Music
		=====================================*/		

		this.intro_music = this.sound.add('intro_music', {
			mute: false,
			volume: 1,
			rate: 1,
			detune: 0,
			seek: 0,
			loop: true,
			delay: 0
		});
		this.intro_music.play();
		this.coin_sound = this.sound.add('coin_sound');
		this.winning_sound = this.sound.add('winning_sound');

		/*===================================
		Game Objects
		=====================================*/	

		this.background = this.add.image(0, 0, 'background').setOrigin(0, 0);

		this.title = this.add
			.image(this.gameBoard.config.width / 2, 50, 'title')
			.setScale(0.5, 0.5);

		// gameboard display gameObjects
		this.boardbg = this.add
			.image(21, 91, 'boardbg')
			.setOrigin(0, 0);


		/* block images */
		this.box_blank1 = this.add
			.image(32, 102, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('box_number', 1);

		this.box_blank2 = this.add
			.image(74, 102, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('box_number', 2);

		this.box_blank3 = this.add
			.image(116, 102, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('box_number', 3);

		this.box_blank4 = this.add
			.image(32, 144, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('box_number', 4);

		this.box_blank5 = this.add
			.image(74, 144, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('box_number', 5);

		this.box_blank6 = this.add
			.image(116, 144, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('box_number', 6);

		this.box_blank7 = this.add
			.image(32, 186, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('box_number', 7);

		this.box_blank8 = this.add
			.image(74, 186, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('box_number', 8);

		this.box_blank9 = this.add
			.image(116, 186, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('box_number', 9);

		// Display winning gameObjects
		this.playagainBtn = this.add
			.image(this.gameBoard.config.width / 2, 275, 'playagain')
			.setDepth(5);

		this.wins = this.add
			.image(-200, 150, 'wins')
			.setDepth(5);

		this.xIcon = this.add
			.image(this.gameBoard.config.width / 2 - 0, 140, 'xIcon')
			.setAlpha(0)
			.setScale(0.5, 0.5)
			.setDepth(6);

		this.oIcon = this.add
			.image(this.gameBoard.config.width / 2 - 0, 140, 'xIcon')
			.setAlpha(0)
			.setScale(0.5, 0.5)
			.setDepth(6);
	}
	update(time, delta) {}
}
