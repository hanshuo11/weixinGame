import { Sprite } from '../base/Sprite';

export class BackGround extends Sprite {
	constructor() {
		const image = Sprite.getImage('background');
		const width = wx.getSystemInfoSync().windowWidth;
		const height = wx.getSystemInfoSync().windowHeight;
		super(image, 0, 0, image.width, image.height, 0, 0, width, height);
	}
}
