var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create
  }
}

var game = new Phaser.Game(config)

function preload () {
  this.load.setBaseURL('/')

  this.load.image('sky', './images/night.png')
  this.load.image('logo', './images/logo.png')
  this.load.image('cloudParticle', './images/cloud.png')
}

function create () {
  this.add.image(400, 300, 'sky')

  var particles = this.add.particles('cloudParticle')

  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD'
  })

  var logo = this.physics.add.image(400, 300, 'logo')

  logo.setVelocity(100, 200)
  logo.setBounce(1, 1)
  logo.setCollideWorldBounds(true)

  emitter.startFollow(logo)
}
