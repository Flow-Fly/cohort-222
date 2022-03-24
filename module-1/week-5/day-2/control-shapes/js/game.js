class Game {
	constructor() {
		this.canvas = null;
		this.ctx = null;
		this.gameSize = { w: null, h: null };
		this.player = null;
		// Automatically building up our Canvas element
		this.init();
	}

	init() {
		// Calling all the needed methods built under
		this.setCanvas();
		this.setSize();
		this.createPlayer();
		this.drawAll();
		this.setEventHandlers();
	}

	setCanvas() {
		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		document.body.append(this.canvas);
	}

	setSize() {
		this.gameSize = { w: window.innerWidth, h: window.innerHeight };
		this.canvas.setAttribute("width", this.gameSize.w);
		this.canvas.setAttribute("height", this.gameSize.h);
	}
	createPlayer() {
		this.player = new Player(this.ctx, 50, 50, 50, 50);
	}
	drawAll() {
		setInterval(() => {
			this.clear();
			this.player.draw();
		}, 1000 / 60);
	}

	setEventHandlers() {
		document.addEventListener("keydown", (event) => {
			console.log(event);
			const key = event.key;
			// if (key === "ArrowRight") {
			// 	this.player.moveRight();
			// }
			// key === "ArrowRight" && this.player.moveRight();

			key === "ArrowRight" ? this.player.moveRight() : null;
			key === "ArrowLeft" ? this.player.moveLeft() : null;
		});
	}

	clear() {
		this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h);
	}
}
