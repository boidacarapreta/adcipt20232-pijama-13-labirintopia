export default class principal extends Phaser.Scene {
  constructor () {
    super('principal')
  }

  preload () {
    this.load.tilemapTiledJSON('labirinto', '../assets/mapa/mapa.json')

    this.load.image('terreno', '../assets/mapa/terreno.png')
    this.load.image('base-parede', '../assets/mapa/base-parede.png')
    this.load.image('parede-horizontal', '../assets/mapa/parede-horizontal.png')
    this.load.image('parede-vertical', '../assets/mapa/parede-vertical.png')
    this.load.image('topo-de-quina', '../assets/mapa/topo-de-quina.png')
    this.load.image('base-quina', '../assets/mapa/base-quina.png')
  }

  create () { 
    this.tilemapLabirinto = this.make.tilemap({
      key: 'labirinto'
    })

    this.tilesetTerreno = this.tilemapLabirinto.addTilesetImage('terreno')
    this.tilesetBaseParede = this.tilemapLabirinto.addTilesetImage('base-parede')
    this.tilesetParedeHorizontal = this.tilemapLabirinto.addTilesetImage('parede-horizontal')
    this.tilesetParedeVertical = this.tilemapLabirinto.addTilesetImage('parede-vertical')
    this.tilesetTopoDeQuina = this.tilemapLabirinto.addTilesetImage('topo-de-quina')
    this.tilesetBaseQuina = this.tilemapLabirinto.addTilesetImage('base-quina')

    this.layerTerreno = this.tilemapLabirinto.createLayer('terreno', [this.tilesetTerreno])
    this.layerParede = this.tilemapLabirinto.createLayer('parede', [this.tilesetBaseParede, this.tilesetParedeHorizontal, this.tilesetParedeVertical, this.tilesetTopoDeQuina, this.tilesetBaseQuina])
  }

  update () { }
}
