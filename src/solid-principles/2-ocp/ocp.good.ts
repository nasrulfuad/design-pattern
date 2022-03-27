export interface Shape {
  calculateArea(): number;
}

export class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  public calculateArea(): number {
    console.log("Calculate ", Rectangle.name);
    return this.width * this.height;
  }
}

export class Circle {
  constructor(public radius: number) {}

  public calculateArea(): number {
    console.log("Calculate ", Circle.name);
    return Math.PI * (this.radius * this.radius);
  }
}

export class AreaCalculator {
  public calculateArea(shape: Shape): number {
    return shape.calculateArea();
  }
}
