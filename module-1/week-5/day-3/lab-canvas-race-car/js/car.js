class Car {
	constructor(canvas, ctx) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.image = null;
		this.carSpeed = 2;
		this.width = 50;
		this.height = 100;
		this.y = this.canvas.height - (this.height + 50);
		this.x = (this.canvas.width - this.width) / 2;
		this.init();
	}

	init() {
		this.image = new Image();
		this.image.src = "images/car.png";
	}

	draw() {
		if (this.image) {
			this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		}
	}

	moveLeft() {
		if (this.x > 0) {
			this.x -= this.carSpeed;
		}
	}

	moveRight() {
		if (this.x < this.canvas.width - this.width) {
			this.x += this.carSpeed;
		}
	}
}
