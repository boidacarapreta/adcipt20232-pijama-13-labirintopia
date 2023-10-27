/* importação de objetos */

import config from './config.js'
import cena0 from './cenas/cena0.js'
import sala from './cenas/cena-sala.js'
import principal from './cenas/cena-principal.js'
import finaltriste from './cenas/cena-game-over.js'
import finalfeliz from './cenas/cena-final-feliz.js'

class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.id = 1 // Labirintopia, id 1
    this.valor = 100 // crédito padrão em Tijolinhos quando termina o jogo

    let iceServers
    if (window.location.host === 'feira-de-jogos.sj.ifsc.edu.br') {
      iceServers = [
        {
          urls: 'stun:feira-de-jogos.sj.ifsc.edu.br'
        },
        {
          urls: 'turns:feira-de-jogos.sj.ifsc.edu.br',
          username: 'adcipt',
          credential: 'adcipt20232'
        }
      ]
    } else {
      iceServers = [
        {
          urls: 'stun:stun.l.google.com:19302'
        }
      ]
    }
    this.iceServers = { iceServers }
    this.audio = document.querySelector('audio')

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
    this.scene.add('finalfeliz', finalfeliz)
    this.scene.start('cena0')
  }
}

/* criação do objeto */
window.onload = () => {
  window.game = new Game()
}
