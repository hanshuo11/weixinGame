import { DataStore } from './base/DataStore.js';
// 导演，负责处理游戏的业务逻辑
export class Director {
	static getInstance() {
		if (!Director.instance) {
			Director.instance = new Director();
		}
		return Director.instance;
	}
	constructor() {
		this.dataStore = DataStore.getInstance();
	}
	run() {
		this.dataStore.get('background').draw();
	}
}
