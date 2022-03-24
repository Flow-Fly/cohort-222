class Background {
	constructor(canvas, ctx) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.image = null;
		this.moveSpeed = 2;
		this.y = 0;
	}

	setImage() {
		this.image = new Image();
		this.image.src = "assets/pixel-art-space.png";
	}

	draw() {
		if (this.image) {
			this.ctx.drawImage(
				this.image,
				0,
				this.y,
				this.canvas.width,
				this.canvas.height
			);
			this.ctx.drawImage(
				this.image,
				0,
				this.y - this.canvas.height,
				this.canvas.width,
				this.canvas.height
			);
		}
	}

	move() {
		this.y += this.moveSpeed;
		this.y %= this.canvas.height;
	}
}
