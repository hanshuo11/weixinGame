import { ResourceLoader } from './js/base/ResourceLoader.js';
import { Director } from './js/Director.js';
import { BackGround } from './js/runTime/BackGround.js';
import { DataStore } from './js/base/DataStore.js';

export class Main {
	constructor() {
		this.canvas = wx.createCanvas();
		this.ctx = this.canvas.getContext('2d');
		// dataStore创建
		this.dataStore = DataStore.getInstance();
		const loader = ResourceLoader.create();
		loader.onLoaded((map) => this.onResourceLoader(map));
	}
	onResourceLoader(map) {
		// 随时销毁的放到DataStore的map中，长久保存的放入到DataStore的原型链中
		this.dataStore.ctx = this.ctx;
		this.dataStore.res = map;
		this.init();
	}
	init() {
		this.dataStore.put('background',BackGround);
		Director.getInstance().run();
	}
}
