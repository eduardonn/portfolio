interface PhysicsSettings {
  springForce: number;
  viscosity: number;
  waveDissipationSpeedMs: number;
  wavesFriction: number;
  wavePropagationEnergyLoss: number;
}

interface Point {
  x: number,
  y: number,
  vy: number,
  domElement?: SVGCircleElement,
}

class WobblyPointsEngine {
  #points: Array<Point>;
  physicsSettings: PhysicsSettings
  radius: number;
  #numPoints: number;
  #animationFrameID?: number;
  svgElement?: SVGPathElement;
  contentElementRect?: DOMRect;

  constructor(numPoints: number, settings?: PhysicsSettings) {
    this.radius = 2;
    if (numPoints > 2) {
      this.#numPoints = 
        (numPoints % 2 === 0) ? numPoints + 1 : numPoints; // numPoints must be odd
    } else {
      this.#numPoints = 5;
    }
    this.physicsSettings = {
      springForce: 3,
      viscosity: 300,
      waveDissipationSpeedMs: 100,
      wavesFriction: .92,
      wavePropagationEnergyLoss: 8,
      ...settings,
    }
    
    const pointsGap = window.innerWidth / (this.#numPoints - 1);
    this.#points = new Array(this.#numPoints).fill(null).map((_, i) => {
      return { x: i * pointsGap, y: 0, vy: 0 };
    });
  }

  handleWindowResize() {
    const pointsGap = window.innerWidth / (this.#numPoints - 1);
    this.#points.forEach((point, i) => {
      point.x = i * pointsGap;
    });
  }

  #applySpringForce(point: Point) {
    const targetHeight = this.contentElementRect!.height;
    const pointDistanceFromTarget = 
      Math.abs(point.y - targetHeight);

    // Factor for decreasing springForce as the distance from target position decreases
    const forceFactor = 
      Math.min(pointDistanceFromTarget, this.physicsSettings.viscosity)
      / this.physicsSettings.viscosity;

    point.vy += 
      (point.y < targetHeight)
        ? this.physicsSettings.springForce * forceFactor 
        : -this.physicsSettings.springForce * forceFactor;
  }

  #updatePhysics() {
    this.#points.forEach(point => {
      point.vy *= this.physicsSettings.wavesFriction;

      this.#applySpringForce(point);

      point.y += point.vy;
    });
  }

  #updateSvgElement() {
    let newDAttribute = `M0 0 L`;
    for (let i = 0; i < this.#points.length; i++) {
      newDAttribute += ` ${Math.round(this.#points[i].x)} ${Math.round(this.#points[i].y)}`;
    }
    newDAttribute += ` ${window.innerWidth} 0`;
    this.svgElement!.setAttribute('d', newDAttribute);
  }

  update() {
    this.#updatePhysics();
    this.#updateSvgElement();

    this.#animationFrameID = requestAnimationFrame(this.update.bind(this));
  }

  startAnimation() {
    this.#animationFrameID = requestAnimationFrame(this.update.bind(this));
  }

  stopAnimation() {
    cancelAnimationFrame(this.#animationFrameID!);
  }

  addForceWave(offset: number, force: number) {
    const targetPointIndex = Math.round((this.#points.length - 1) * offset);

    this.#points.forEach((point, i) => {
      const distanceFromTargetPoint = Math.abs(targetPointIndex - i);
      const delay = distanceFromTargetPoint * this.physicsSettings.waveDissipationSpeedMs;

      // Factor for decreasing force applied as point get further away from target
      let forceFactor = this.physicsSettings.wavePropagationEnergyLoss
        / (distanceFromTargetPoint + this.physicsSettings.wavePropagationEnergyLoss);

      setTimeout(() => point.vy += force * forceFactor, delay);
    });
  }
}

export default WobblyPointsEngine;