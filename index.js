/*importação de objetos*/

import config from './config.js'

class Game extends Phaser.Game {
    constructor () {
        super(config)
    }
 }
 
 /*criação do objeto*/
 window.onload = () => {
    window.game = new Game()
  }
  