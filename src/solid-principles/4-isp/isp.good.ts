export interface Singer {
  sing(): void;
}

export interface Shooter {
  shoot(): void;
}

export interface Swimmer {
  swim(): void;
}

export interface Dancer {
  dance(): void;
}

export class John implements Shooter, Dancer {
  public shoot(): void {
    // some method
  }

  public dance(): void {
    // some method
  }
}

export class Jane implements Singer, Swimmer {
  swim(): void {
    // some method
  }

  sing(): void {
    // some method
  }
}
