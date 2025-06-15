import Phaser from 'phaser';


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#87CEEB',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
    scene: [MainScene], // Add your scene(s)
  };
  
  const game = new Phaser.Game(config);
  