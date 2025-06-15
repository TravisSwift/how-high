import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene'); // Unique key for this scene
  }

  preload() {
    console.log('Preloading assets...');
  }

  create() {
    console.log('Creating the game world...');
  }

  update() {
    console.log('Updating the game...');
  }
}
