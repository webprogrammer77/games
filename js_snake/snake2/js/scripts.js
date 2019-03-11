window.onload = function (e) {

		var score = 0;
		var inputScore = document.querySelector('.input_score');
		inputScore.value=0;

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 15, 15);
		matrix.create();
		
		var cols = matrix.cols,
			rows = matrix.rows;
    
    // var fruit = new Fruit(matrix, [[1, 4]]);
		// fruit.show();
			var x = randomInteger(1, cols);
			var y = randomInteger(1, rows);
			var fruit = new Fruit(matrix, [[x, y]]);
			fruit.show();
    var wall = new Wall(matrix, [[3, 7], [4, 7], [5, 7], [6, 7]]);
    wall.show();
    
    var snake = new Snake(matrix, [[5, 5], [4, 5], [3, 5]], 'right');
    snake.show();
    
    document.onkeydown = function(e){
        snake.course = e.keyCode;
        
        /* добавить защиту от смены курса на противоположный */
        switch(e.keyCode){
						case 37:
								// if (snake.course === 'right') {
								// 	return;
								// }
                snake.course = 'left';
                break;
						case 38:
								// if (snake.course !== 'down') {
								snake.course = 'up';
								// }
                break;
						case 39:
								// if (snake.course !== 'left') {
								snake.course = 'right';
								// }
                break;
						case 40:
						// if (snake.course !== 'up') {
								snake.course = 'down';
						// }
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
        
        if(!snake.alive){
            clearInterval(timer);
            alert('gameover');
        }
        
        /* 
         * если покушала, новый фрукт на случайном поле + очки
         * 
         * */
				if (snake.eating) {
					score  += 10;
					inputScore.value = score;
					let x = randomInteger(1, cols);
					let y = randomInteger(1, rows);
					var fruit = new Fruit(matrix, [[x, y]]);
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
