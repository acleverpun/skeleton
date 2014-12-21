import BaseState from './base-state';
import config from '../config';

class Load extends BaseState {
	constructor(game) {}

	init() {}

	preload() {
		// Set loading image
		this.preloadBar = this.add.sprite((config.width / 2), (config.height / 2), 'preloadBar');
		this.load.setPreloadSprite(this.preloadBar);

		// Load ALL the things!
	}

	create() {
		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;
	}

	update() {
		// If loading music, uncomment the `isSoundDecoded` portion of the if wrapper
		if(/*this.cache.isSoundDecoded('awesomeMenuMusic') &&*/ this.ready === false) {
			this.ready = true;
			this.state.start('MainMenu');
		}
	}
}
export default Load;
