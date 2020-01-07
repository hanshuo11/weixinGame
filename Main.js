import { ResourceLoader } from './js/base/ResourceLoader';
import { Director } from './js/Director';

export class Main {
	constructor() {
		this.canvas = wx.createCanvas();
		this.ctx = this.canvas.getContext('2d');
		const loader = ResourceLoader.create();
        loader.onLoaded((map) => this.fristResourceLoader(map));
        // 渲染背景
		let image = wx.createImage();
		image.src = './res/background.png';
		image.onload = () => {
			this.ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height);
		};
		// Director.getInstance();
	}
	fristResourceLoader(map) {
		console.log('%cmap: ', 'color: MidnightBlue; background: Aquamarine; font-size: 20px;', map);
	}
}
