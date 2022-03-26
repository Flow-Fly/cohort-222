class Obstacle {
	constructor(canvas, ctx, moveSpeed) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.x = Math.floor(Math.random() * (this.canvas.width / 2));
		this.width = Math.floor(Math.random() * (this.canvas.width / 2)) + 50;
		this.height = 10;
		this.y = 0;
		this.moveSpeed = moveSpeed;
	}

	draw() {
		this.ctx.fillStyle = "red";
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	move() {
		this.y += this.moveSpeed;
	}
}
