export class Util{
	constructor(){

	}
	// _n = total
	// _l = array length
	static avg(_n){
		let total = 0;
		_n.forEach(_el => {
				total =+ _el;
		});
		let avg = total / _n.length;
		return Math.round(avg);
	}
}
