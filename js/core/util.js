export class Util{
	constructor(){
	}
	static avg(_n){
		let total = 0;
		let avg = 0;
		_n.forEach(_el => {
			total += _el;
			avg = total/_n.length;
		});
		return Math.round(avg);
	}
}
