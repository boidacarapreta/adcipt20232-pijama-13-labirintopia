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
    this.load.image('sombra1', '../assets/mapa/sombra1.png')
    this.load.image('sombra2', '../assets/mapa/sombra2.png')
    this.load.image('sombra3', '../assets/mapa/sombra3.png')
    this.load.image('sombra4', '../assets/mapa/sombra4.png')
    this.load.image('sombra5', '../assets/mapa/sombra5.png')
    this.load.image('sombra6', '../assets/mapa/sombra6.png')
    this.load.image('sombra7', '../assets/mapa/sombra7.png')
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
    this.tilesetSombra1 = this.tilemapLabirinto.addTilesetImage('sombra1')
    this.tilesetSombra2 = this.tilemapLabirinto.addTilesetImage('sombra2')
    this.tilesetSombra3 = this.tilemapLabirinto.addTilesetImage('sombra3')
    this.tilesetSombra4 = this.tilemapLabirinto.addTilesetImage('sombra4')
    this.tilesetSombra5 = this.tilemapLabirinto.addTilesetImage('sombra5')
    this.tilesetSombra6 = this.tilemapLabirinto.addTilesetImage('sombra6')
    this.tilesetSombra7 = this.tilemapLabirinto.addTilesetImage('sombra7')

    this.layerTerreno = this.tilemapLabirinto.createLayer('terreno', [this.tilesetTerreno])
    this.layerParede = this.tilemapLabirinto.createLayer('parede', [this.tilesetBaseParede, this.tilesetParedeHorizontal, this.tilesetParedeVertical, this.tilesetTopoDeQuina, this.tilesetBaseQuina])
     this.layerSombra = tis.tilemapLabirinto.createLayer('sombra', [this.tilesetSombra1, this.tilesetSombra2, this.tilesetSombra3, this.tilesetSombra4, this.tilesetSombra5, this.tilesetSombra6, this.tilesetSombra7])

  }
  update () { }
}
