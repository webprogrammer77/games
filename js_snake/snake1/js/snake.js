class Snake {

	constructor(matrix, x, y, course) {
		this.matrix = matrix;
		this.x = x;
		this.y = y;
		this.course = course;
		this.alive = true;
	}

	show() {
		this.matrix.setCell(this.x, this.y, 'snake');
	}

	move() {
		let lastX = this.x;
		let lastY = this.y;
		if (!this.alive){
			return;
		}
		

		switch (this.course) {
			case 'right':
				this.x++;
					// if (this.x > this.matrix.cols) {
					// 	this.x = this.matrix.cols;
					// }

				break;
			case 'left':
				this.x--;
					// if (this.x < 1) {
					// 	this.x = 1;
					// }

				break;
			case 'top':
				this.y--;
					// if (this.y < 1) {
					// 	this.y = 1;
					// }

				break;
			case 'bottom':
				this.y++;
					// if (this.y  > this.matrix.rows) {
					// 	this.y = this.matrix.rows;
					// }

				break;
		}
	/*
	
		if (this.x % this.matrix.cols == 1) {

			if (this.course == 'left' && this.y % this.matrix.rows != 1) {
				this.course = 'top';
			}
			if (this.y % this.matrix.rows == 0) {
				if (this.course == 'bottom') {
					this.course = 'right';
				}
				if (this.course == 'left') {
					this.course = 'top';
				}
			}
			if (this.y % this.matrix.rows == 1) {
				if (this.course == 'top') {
					this.course = 'right';
				}
				if (this.course == 'left') {
					this.course = 'bottom';
				}
			}

		}
		if (this.x % this.matrix.cols == 0) {

			if (this.course == 'right' && this.y % this.matrix.rows != 0) {
				this.course = 'bottom';
			}
			if (this.y % this.matrix.rows == 0) {
				if (this.course == 'bottom') {
					this.course = 'left';
				}
				if (this.course == 'right') {
					this.course = 'top';
				}
			}
			if (this.y % this.matrix.rows == 1) {
				if (this.course == 'top') {
					this.course = 'left';
				}
				if (this.course == 'right') {
					this.course = 'bottom';
				}
			}

		}
		if (this.y % this.matrix.rows == 0) {
			if (this.course == 'bottom') {
				this.course = 'left';
			}
		}
		if (this.y % this.matrix.rows == 1) {
			if (this.course == 'top') {
				this.course = 'right';
			}
		}

*/
		console.log(this.y % this.matrix.rows);
		console.log(this.x % this.matrix.cols);

		if (!this._chekAlive()){
			this.alive = false;
			return;
		}
		this.matrix.setCell(lastX, lastY, '');
		this.matrix.setCell(this.x, this.y, 'snake');
	}

	_chekAlive(){
		return this.x >= 1 && this.x <= this.matrix.cols &&
					 this.y >= 1 && this.y <= this.matrix.rows
	}

}