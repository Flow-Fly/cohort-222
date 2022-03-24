class Player {
	constructor(ctx, positionX, positionY, width, height, gameSize) {
		this.ctx = ctx;
		this.playerPos = { x: positionX, y: positionY };
		this.playerSize = { w: width, h: height };
		this.playerVelocity = { x: null, y: null };
		this.image = null;

		this.gameSize = gameSize;
		this.init();
	}

	init() {
		this.image = new Image();
		this.image.src = "assets/ball.png";
		this.playerVelocity = {
			x: this.getRandVelocity(),
			y: this.getRandVelocity(),
		};
	}

	getRandVelocity() {
		const velocity = [-2, 2];
		return velocity[Math.floor(Math.random() * 2)] * (Math.random() * 2);
	}
	draw() {
		if (this.image) {
			this.ctx.drawImage(
				this.image,
				this.playerPos.x,
				this.playerPos.y,
				this.playerSize.w,
				this.playerSize.h
			);
		}
	}

	move() {
		this.playerPos.x += this.playerVelocity.x;
		this.playerPos.y += this.playerVelocity.y;
		this.checkCollision();
	}

	checkCollision() {
		if (this.horizontallyOutOfBound()) {
			this.playerVelocity.x *= -1;
		}

		if (this.verticallyOutOfBound()) {
			this.playerVelocity.y *= -1;
		}
	}

	horizontallyOutOfBound() {
		return (
			this.playerPos.x + this.playerSize.w > this.gameSize.w ||
			this.playerPos.x < 0
		);
	}
	verticallyOutOfBound() {
		return (
			this.playerPos.y < 0 ||
			this.playerPos.y + this.playerSize.h > this.gameSize.h
		);
	}
}
