class Matrix {

	constructor(elem, rows = 20, cols = 20) {

		this.elem = elem;
		this.cols = cols;
		this.rows = rows;
		this.cells = [];

	}

	create() {

		let sq = this.cols * this.rows;
		for (let i = 0; i < sq; i++) {

			let div = document.createElement('div');
			if (i % this.cols === 0) {
				div.classList.add('row-start');

			}
			div.setAttribute('data-game', '');
			this.elem.appendChild(div);
			this.cells[i] = '';
		}

	}

	getCell(x, y) {
		let num = this._calcNum(x, y);
		return this.cells[num];
	}

	setCell(x, y, val) {
		let num = this._calcNum(x, y);
		this.cells[num] = val;
		this.elem.children[num].setAttribute('data-game', val);
	}

	_calcNum(x, y) {
		return (x - 1) + (y - 1) * this.cols;

	}
}