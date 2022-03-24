class Player {
	constructor(ctx, positionX, positionY, width, height) {
		this.ctx = ctx;
		this.playerPos = { x: positionX, y: positionY };
		this.playerSize = { w: width, h: height };
		this.image = null;
		this.init();
	}

	init() {
		this.image = new Image();
		this.image.src = "assets/pokeball.png";
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

	moveLeft() {
		this.playerPos.x -= 5;
	}

	moveRight() {
		this.playerPos.x += 5;
	}
}
