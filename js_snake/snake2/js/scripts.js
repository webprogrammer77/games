window.onload = function (e) {

	let score = 0,
		inputScore = document.querySelector('.input_score');
	inputScore.value = 0;

	let div = document.querySelector('.fields'),
		matrix = new Matrix(div, 15, 15);
	matrix.create();

	let cols = matrix.cols,
		rows = matrix.rows;

	setFruit()
	var wall = new Wall(matrix, [
		[3, 7],
		[4, 7],
		[5, 7],
		[6, 7]
	]);
	wall.show();

	var snake = new Snake(matrix, [
		[5, 5],
		[4, 5],
		[3, 5]
	], 'right');
	snake.show();

	document.onkeydown = function (e) {
		var course = snake.course;
		snake.course = e.keyCode;

		switch (e.keyCode) {
			case 37:
				course === 'right' ? snake.course = 'right' : snake.course = 'left';
				break;
			case 38:
				course === 'down' ? snake.course = 'down' : snake.course = 'up';
				break;
			case 39:
				course === 'left' ? snake.course = 'left' : snake.course = 'right';
				break;
			case 40:
				course === 'up' ? snake.course = 'up' : snake.course = 'down';
				break;
		}
	}

	let timer = setInterval(() => {
		let weight = snake.weight;
		let score = parseInt(inputScore.value);
		snake.move();

		if (!snake.alive) {
			clearInterval(timer);
			alert('gameover');
		}

		if (snake.eating) {
			score += 10;
			inputScore.value = score;

			setFruit();

		}

	}, 500);

	function randomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function setFruit() {

		var x = randomInteger(1, cols);
		var y = randomInteger(1, rows);
		var val = matrix.getCell(x, y);

		setTimeout(function () {
			if (val === '') {

				let fruit = new Fruit(matrix, [
					[x, y]
				]);
				fruit.show();


			} else {
				setFruit();

			}
		}, 200);
	}


}