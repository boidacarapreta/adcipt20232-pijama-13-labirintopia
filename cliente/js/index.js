/* importação de objetos */

import config from './config.js'
import cena0 from './cenas/cena0.js'
import sala from './cenas/cena-sala.js'
import principal from './cenas/cena-principal.js'
import alfabeto from './cenas/cena-alfabeto.js'
import finaltriste from './cenas/cena-game-over.js'
import finalfeliz from './cenas/cena-final-feliz.js'
import creditos from './cenas/cena-creditos.js'
import resposta from './cenas/cena-resposta.js'
import gameover from './cenas/cenagameover.js'
import desafiofinal from './cenas/desafiofinal.js'

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
    this.scene.add('alfabeto', alfabeto)
    this.scene.add('resposta', resposta)
    this.scene.add('finaltriste', finaltriste)
    this.scene.add('creditos', creditos)
    this.scene.add('gameover', gameover)
    this.scene.add('desafiofinal', desafiofinal)
    this.scene.add('finalfeliz', finalfeliz)

    this.data = new Date('2024-01-01T00:15:00.000')
    this.data_formatada = ''
    setInterval(() => {
      this.data = new Date(this.data.getTime() - 1000) // Incrementa em 1 segundo o relógio
      this.data_formatada =
        (this.data.getMinutes() < 10 ? '0' : '') + // Adiciona 0 quando necessário
        this.data.getMinutes() +
        ':' +
        (this.data.getSeconds() < 10 ? '0' : '') + // Adiciona 0 quando necessário
        this.data.getSeconds()

      /* Verifica se já chegou a meia noite */
      // this.fimDoJogo = new Date("2024-01-01T00:00:00.000");
      this.fimDoJogo = new Date('2024-01-01T00:00:00.000')
      if (this.data.getTime() === this.fimDoJogo.getTime()) {
        this.scene.stop('principal')
        this.scene.start('finaltriste')
      }
    }, 1000)

    this.scene.start('cena0')
    this.verifica_alfabeto = 'F'
  }
}

/* criação do objeto */
window.onload = () => {
  window.game = new Game()
}
