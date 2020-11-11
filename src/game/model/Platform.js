import { Vector } from 'vectmath';

const PLATFORM_WIDTH = 20;
const PLATFORM_HEIGHT = 100;

export default class Platform {
  constructor(x, y) {
    this.pos = new Vector(x, y - PLATFORM_HEIGHT / 2);
    this.vel = new Vector(0, 0);
  }

  setSpeed(speed) {
    this.vel.y = speed;
  }

  update() {
    this.pos.add(this.vel);
  }

  draw(ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.pos.x, this.pos.y, PLATFORM_WIDTH, PLATFORM_HEIGHT);
  }
}
