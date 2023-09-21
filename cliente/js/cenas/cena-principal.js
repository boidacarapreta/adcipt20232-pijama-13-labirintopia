export default class principal extends Phaser.Scene {
  constructor () {
    super('principal')
  }

  preload () {
    this.load.tilemapTiledJSON('labirinto', '../assets/mapa/mapa1.json')

    this.load.image('basedechao', '../assets/mapa/basedechao.png')
    this.load.image('ph', '../assets/mapa/ph.png')
    this.load.image('pv', '../assets/mapa/pv.png')
    this.load.image('quina', '../assets/mapa/quina.png')
  }

  create () { 
    this.tilemapLabirinto = this.make.tilemap({
      key: 'labirinto'
    })

    this.tilesetBaseDeChao = this.tilemapLabirinto.addTilesetImage('basedechao')
    this.tilesetPH = this.tilemapLabirinto.addTilesetImage('ph')
    this.tilesetPV = this.tilemapLabirinto.addTilesetImage('pv')
    this.tilesetQuina = this.tilemapLabirinto.addTilesetImage('quina')

    this.layerTerreno = this.tilemapLabirinto.createLayer('terreno', [this.tilesetBaseDeChao])
    this.layerParedes = this.tilemapLabirinto.createLayer('paredes', [this.tilesetPH, this.tilesetPV, this.tilesetQuina])
  }

  update () { }
}
