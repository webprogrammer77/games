window.onload = function (e) {

	let score = 0,
		inputScore = document.querySelector('.input_score');
	inputScore.value = 0;

	let div = document.querySelector('.fields'),
		matrix = new Matrix(div, 15, 15);
	matrix.create();

	let cols = matrix.cols,
		rows = matrix.rows;

	// var fruit = new Fruit(matrix, [[1, 4]]);
	// fruit.show();
	let x = randomInteger(1, cols),
		y = randomInteger(1, rows),
		fruit = new Fruit(matrix, [
			[x, y]
		]);
	fruit.show();
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
	//var course = snake.course;
	document.onkeydown = function (e) {
		var course = snake.course;
		snake.course = e.keyCode;
		
		/* добавить защиту от смены курса на противоположный */
		switch (e.keyCode) {
			case 37:
				if (course === 'right') {
					snake.course = 'right';
					//break;
				} else {
					snake.course = 'left';
				}
				break;
			case 38:
				if (course === 'down') {
					snake.course = 'down';
				} else {
					snake.course = 'up';
				}

				break;
			case 39:
				if (course === 'left') {
					snake.course = 'left';
				} else {
					snake.course = 'right';
				}
				break;
			case 40:
				if (course === 'up') {
					snake.course = 'up';
				} else {
					snake.course = 'down';
				}

				break;
		}
	}
	//	let score = 0;
	//let inputScore = document.querySelector('.input_score');
	//let cols = matrix.cols,
	//	rows = matrix.rows;
	let timer = setInterval(() => {
		let weight = snake.weight;
		let score = parseInt(inputScore.value);
		snake.move();

		if (!snake.alive) {
			clearInterval(timer);
			alert('gameover');
		}

		/* 
		 * если покушала, новый фрукт на случайном поле + очки
		 * 
		 * */
		if (snake.eating) {
			score += 10;
			inputScore.value = score;

			var x,y,val;
			
			 //val = matrix.getCell([[x, y]]);
			while (true){				 
			 	x = randomInteger(1, cols);
				y = randomInteger(1, rows);
				val = matrix.getCell([[x, y] ]);
				if( val !== 'snake' && val !== 'wall'){
				break;
				}
			 };

			let fruit = new Fruit(matrix, [[x, y]]);
			fruit.show();
		}


	}, 500);

	function randomInteger(min, max) {
		// var rand = min + Math.random() * (max + 1 - min);
		// rand = Math.floor(rand);
		// return rand;
		return Math.floor(Math.random() * (max - min + 1) + min);
	}


}