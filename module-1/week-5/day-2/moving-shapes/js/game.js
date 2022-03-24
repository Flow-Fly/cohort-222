class Game {
	constructor() {
		this.canvas = null;
		this.ctx = null;
		this.gameSize = { w: null, h: null };
		this.players = null;
		this.background = null;
		// Automatically building up our Canvas element
		this.init();
	}

	init() {
		// Calling all the needed methods built under
		this.setCanvas();
		// Set the size of the canvas Element
		this.setSize();
		this.createPlayer();
		this.createBackground();
		this.drawAll();
	}

	setCanvas() {
		this.canvas = document.getElementById("my-canvas");
		this.ctx = this.canvas.getContext("2d");
	}

	setSize() {
		this.gameSize = { w: window.innerWidth, h: window.innerHeight };
		this.canvas.setAttribute("width", this.gameSize.w);
		this.canvas.setAttribute("height", this.gameSize.h);
	}
	createPlayer() {
		this.players = [
			new Player(this.ctx, 100, 100, 50, 50, this.gameSize),
			new Player(this.ctx, 20, 200, 100, 100, this.gameSize),
			new Player(this.ctx, 100, 100, 10, 10, this.gameSize),
		];
	}
	createBackground() {
		this.background = new Background(this.canvas, this.ctx);
		this.background.setImage();
	}

	drawAll() {
		this.clear();
		this.background.draw();
		this.background.move();

		this.players.forEach((player) => {
			player.move();
			player.draw();
		});
		requestAnimationFrame(() => this.drawAll());
	}

	clear() {
		this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h);
	}
}
