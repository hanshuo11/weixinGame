export class Director {
	constructor() {
		console.log('Director');
	}
	static getInstance() {
		if (!Director.instance) {
			Director.instance = new Director();
		}
		return Director.instance;
	}
}
