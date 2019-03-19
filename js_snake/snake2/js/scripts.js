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
	let wall = new Wall(matrix, [
		[3, 7],
		[4, 7],
		[5, 7],
		[6, 7]
	]);
	wall.show();

	let snake = new Snake(matrix, [
		[5, 5],
		[4, 5],
		[3, 5]
	], 'right');
	snake.show();

	document.onkeydown = function (e) {
		

		switch (e.keyCode) {
			case 37:
				if (snake.course !== 'right') {
					snake.newcourse = 'left';
				}
				break;
			case 38:
				if (snake.course !== 'down') {
					snake.newcourse = 'up';}
				break;
			case 39:
				if (snake.course !== 'left') {
					snake.newcourse = 'right';}
				break;
			case 40:
				if (snake.course !== 'up') {
					snake.newcourse = 'down';}
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

		let x = Helpers.random(1, cols);
		let y = Helpers.random(1, rows);
	

		
		while (matrix.getCell(x, y) !== '') {
			 x = Helpers.random(1, cols);
			 y = Helpers.random(1, rows);
		}
		(new Fruit(matrix, [
			[x, y]
		])).show();
		
		/*let val = matrix.getCell(x, y);
		if (val === '') {

				(new Fruit(matrix, [[x, y]])).show();


			} else {
				setFruit();

			}*/
	
	}


}