class Fruit extends Elem {

	constructor(matrix, cords) {
		super(matrix, cords);
		this.value = ['apple', 'orange', 'limon'];
		this.fruitsLen = this.value.length;
		
	}
	  show() {
	  	for (let cord of this.cords) {
				let fruit = this.value[Helpers.random(0, this.fruitsLen - 1)];
				console.log(fruit);
				
				this.matrix.setCell(cord[0], cord[1], fruit);
	  	}
	  }
	_random(min, max) {		
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}