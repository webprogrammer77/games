class Snake {

	constructor(matrix, x, y, course) {
		this.matrix = matrix;
		this.x = x;
		this.y = y;
		this.course = course;
	}

	show() {
		this.matrix.setCell(this.x, this.y, 'snake');
	}

	move() {
		this.matrix.setCell(this.x, this.y, '');

		switch (this.course) {
			case 'right':
				this.x++;
					if (this.x > 19) {
						this.x = 19;
					}

				break;
			case 'left':
				this.x--;
					if (this.x < 0) {
						this.x = 0;
					}

				break;
			case 'top':
				this.y--;
					if (this.y < 0) {
						this.y = 0;
					}

				break;
			case 'bottom':
				this.y++;
					if (this.y > 19) {
						this.y = 19;
					}

				break;
		}
	
	
		if (this.x % 20 == 0) {

			if (this.course == 'left' && this.y % 20 != 0) {
				this.course = 'top';
			}
			if (this.y % 20 == 19) {
				if (this.course == 'bottom') {
					this.course = 'right';
				}
				if (this.course == 'left') {
					this.course = 'top';
				}
			}
			if (this.y % 20 == 0) {
				if (this.course == 'top') {
					this.course = 'right';
				}
				if (this.course == 'left') {
					this.course = 'bottom';
				}
			}

		}
		if (this.x % 20 == 19) {

			if (this.course == 'right' && this.y % 20 != 19) {
				this.course = 'bottom';
			}
			if (this.y % 20 == 19) {
				if (this.course == 'bottom') {
					this.course = 'left';
				}
				if (this.course == 'right') {
					this.course = 'top';
				}
			}
			if (this.y % 20 == 0) {
				if (this.course == 'top') {
					this.course = 'left';
				}
				if (this.course == 'right') {
					this.course = 'bottom';
				}
			}

		}
		if (this.y % 20 == 19) {
			if (this.course == 'bottom') {
				this.course = 'left';
			}
		}
		if (this.y % 20 == 0) {
			if (this.course == 'top') {
				this.course = 'right';
			}
		}


		console.log(this.y % 20);
		console.log(this.x % 20);
		this.matrix.setCell(this.x, this.y, 'snake');
	}

	moveRect(e) {

		switch (e.keyCode) {

			case 37: // если нажата клавиша влево
				this.course = 'left';
				break;
			case 38: // если нажата клавиша вверх
				this.course = 'top';
				break;
			case 39: // если нажата клавиша вправо
				this.course = 'right';
				break;
			case 40: // если нажата клавиша вниз
				this.course = 'bottom';
				break;
		}
	}



}