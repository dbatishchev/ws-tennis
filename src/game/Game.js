import Ball from './model/Ball';
import Platform from './model/Platform';

export default class Game {
  constructor(canvas, width, height) {
    this.width = width;
    this.height = height;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.display = 'block';

    this.player = new Platform(10, this.height / 2);
    this.opponent = new Platform(this.width - 50, this.height / 2);
    this.ball = new Ball(this.width / 2, this.height / 2);

    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  /**
   * @private
   */
  draw = () => {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ball.update(this.width, this.height);
    this.ball.draw(this.ctx);

    if (this.ball.isHit) {

    }

    this.player.update();
    this.player.draw(this.ctx);

    this.opponent.update();
    this.opponent.draw(this.ctx);

    requestAnimationFrame(this.draw);
  }

  handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      this.player.setSpeed(-10);
    }

    if (e.key === 'ArrowDown') {
      this.player.setSpeed(10);
    }
  };

  handleKeyUp = (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      this.player.setSpeed(0);
    }
  };

  run() {
    this.draw();
  }

  shutdown() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);
  }
}
