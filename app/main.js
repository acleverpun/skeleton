import config from './config';
import Boot from './states/boot';
import Load from './states/load';
import MainMenu from './states/main-menu';
import Game from './states/game';


var game = new Phaser.Game(config.width, config.height, config.renderer, config.name);

game.state.add('Boot', Boot);
game.state.add('Load', Load);
game.state.add('MainMenu', MainMenu);
game.state.add('Game', Game);

game.state.start('Boot');

export default game;
