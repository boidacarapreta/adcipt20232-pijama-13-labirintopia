/* importação de objetos */

import config from './config.js'
import cena0 from './cenas/cena0.js'
import sala from './cenas/cena-sala.js'
import principal from './cenas/cena-principal.js'
import finaltriste from './cenas/cena-game-over.js'

class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.socket = io()
    this.socket.on('connect', () => {
      console.log('Conectado ao servidor!')
    })

    this.scoreMoeda = {
      score: 0
    }
    this.scoreCoração = {
      score: 0
    }

    this.scene.add('cena0', cena0)
    this.scene.add('sala', sala)
    this.scene.add('principal', principal)
    this.scene.add('final-triste', finaltriste)

    this.scene.start('cena0')
  }
}

/* criação do objeto */
window.onload = () => {
  window.game = new Game()
}
