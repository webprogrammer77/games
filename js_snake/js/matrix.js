class Matrix{
    
 
    constructor(elem, M, N){

				this.elem = elem;
				this.M = M;
				this.N = N;				
				this.cells = [];
				
    }
    
    create(){
				let sq = this.M * this.N;
        for (let i = 0; i < sq; i++) {
            let div = document.createElement('div');
            this.elem.appendChild(div);
            this.cells[i] = '';
        }
    }
    
    getCell(x, y){
        let num = this._calcNum(x, y);
        return this.cells[num];
    }
    
    setCell(x, y, val){
				let num = this._calcNum(x, y);
			
        this.cells[num] = val;
        this.elem.children[num].className = val;
    }
    
    /* пересчитать № строки и № столбца в i */ 
    _calcNum(x, y){
     
					let height = this.N;
					return x + y * height;
		
    }
}

