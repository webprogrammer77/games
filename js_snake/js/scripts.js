window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div,20,20);
    matrix.create();
    
    matrix.setCell(4, 5, 'fruit');
    
    var snake = new Snake(matrix, 1, 18, 'right');
    snake.show();
    
    setInterval(() => {
				snake.move();
					addEventListener("keydown", function (e) {
						snake.moveRect(e);
					}, {
						once: true
					});
		}, 500);
		// addEventListener("keydown", function(e){
		// 	snake.moveRect(e);
		// }, {
		// 	once: true
		// }
		// );
}
