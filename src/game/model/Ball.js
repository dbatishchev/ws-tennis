import { Vector } from 'vectmath';

export default class Ball {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(10, 10);
  }

  /**
   * @param {Platform} platform
   * @return {boolean}
   */
  isHit(platform) {
    return false;
  }

  update(boundaryX, boundaryY) {
    this.pos.add(this.vel);

    if (this.pos.x <= 0 || this.pos.x >= boundaryX) {
      // todo game over
      // this.vel.x = -this.vel.x;
    }

    if (this.pos.y <= 0 || this.pos.y >= boundaryY) {
      this.vel.y = -this.vel.y;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 30, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
  }
}
