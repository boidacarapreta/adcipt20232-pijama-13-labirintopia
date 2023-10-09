/* importação de objetos */

import config from './config.js'
import cena0 from './cenas/cena0.js'
import sala from './cenas/cena-sala.js'
import principal from './cenas/cena-principal.js'

class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.socket = io()
    this.socket.on('connect', () => {
      console.log('Conectado ao servidor!')
      this.socket.emit('entrar-na-sala', 1)

      this.socket.on('jogadores', (jogadores) => {
        console.log(jogadores)
      })
    })

    this.scene.add('cena0', cena0)
    this.scene.add('sala', sala)
    this.scene.add('principal', principal)

    this.scene.start('cena0')
  }
}

/* criação do objeto */
window.onload = () => {
  window.game = new Game()
}
