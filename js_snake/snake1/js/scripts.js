window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div,10,7);
    matrix.create();
    
    matrix.setCell(4, 5, 'fruit');
    
    var snake = new Snake(matrix, 1, 5, 'right');
		snake.show();
		
		document.addEventListener("keydown",  (e) => {
			snake.alive = true;
			//start();
			switch (e.keyCode) {

				case 37: // если нажата клавиша влево
					snake.course = 'left';
					break;
				case 38: // если нажата клавиша вверх
					snake.course = 'top';
					break;
				case 39: // если нажата клавиша вправо
					snake.course = 'right';
					break;
				case 40: // если нажата клавиша вниз
					snake.course = 'bottom';
					break;
			}
		});
		start();
    function start()  {

		
    let timer = setInterval(() => {
				snake.move();
				if(!snake.alive){
					clearInterval(timer);
					alert('Game over');
				}
					
		}, 500);
	 
	}
			
		
}
