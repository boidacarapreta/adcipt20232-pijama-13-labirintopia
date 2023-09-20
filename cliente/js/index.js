/* importação de objetos */

import config from './config.js'
import cena0 from './cenas/cena0.js'
import cenasala from './cenas/cena-sala.js'

class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.scene.add('cena0', cena0)
    this.scene.add('cenasala', cenasala)
    this.scene.start('cena0')
  }
}

/* criação do objeto */
window.onload = () => {
  window.game = new Game()
}
