const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 600;

const context = canvas.getContext("2d");

context.fillStyle = "rgba(255,50,20,.75)";
context.fillRect(100, 100, 300, 50);

context.strokeStyle = "dodgerblue";
context.strokeRect(90, 90, 320, 200);

context.rect(250, 200, 50, 50);
context.fill();
context.strokeStyle = "black";
context.stroke();

context.clearRect(275, 225, 25, 25);

context.beginPath();
context.lineWidth = 3;
context.moveTo(90, 90);
context.lineTo(410, 290);
context.lineTo(410, 90);
context.lineTo(90, 290);
context.closePath();

context.stroke();

context.beginPath();
context.moveTo(50, 350);
context.lineTo(75, 250);
context.lineTo(120, 400);
context.fillStyle = "dodgerblue";
context.fill();
context.stroke();

context.beginPath();
context.arc(350, 400, 20, 0, 2 * Math.PI);
context.strokeStyle = "green";
context.stroke();
context.beginPath();
context.arc(400, 500, 30, Math.PI, Math.PI / 4);
context.strokeStyle = "green";
context.stroke();

context.font = "30px arial";
context.fillText("Hello hackers !", 250, 400);

function drawSomeSquare(num) {
	for (let i = 0; i < num; i++) {
		context.beginPath();
		context.fillRect(100 * i, 500, 25, 25);
	}
}

drawSomeSquare(8);
