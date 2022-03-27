export class Bird {
  constructor(private name: string) {}

  public fly() {
    // some method
  }

  public walk() {
    // some method
  }
}

export class Eagle extends Bird {
  constructor() {
    super("Eagle");
  }
}

/** Pinguin cannot fly */
export class Pinguin extends Bird {
  constructor() {
    super("Pinguin");
  }
}
