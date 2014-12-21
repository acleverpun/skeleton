import BaseState from './base-state';

class MainMenu extends BaseState {
	constructor(game) {}

	init() {}

	preload() {}

	create() {
		this.playButton = this.add.button(400, 600, 'playButton', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
	}

	update() {}

	startGame() {
		this.state.start('Game');
	}
}
export default MainMenu;
