export class Rectangle {
  constructor(public width: number, public height: number) {}
}

export class Circle {
  constructor(public radius: number) {}
}

export class AreaCalculator {
  public calculateRectangleArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }

  public calculateCircleArea(circle: Circle): number {
    return Math.PI * (circle.radius * circle.radius);
  }
}
