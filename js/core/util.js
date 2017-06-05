export class Util{
	constructor(){

	}
	// _n = total
	// _l = array length
	static avg(_n, _l){
		let total = 0;
		for(let i = 0; i < _l; i++){
			total =+ _n;
		}
		let avg = total / _l;
		return Math.round(avg);
	}
}
