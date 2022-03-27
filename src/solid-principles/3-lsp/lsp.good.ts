export class Bird {
  constructor(private name: string) {}

  public eat() {
    // some method
  }
}

export class FlyBird extends Bird {
  public fly() {
    // some method
  }
}

export class WalkBird extends Bird {
  public walk() {
    // some method
  }
}
