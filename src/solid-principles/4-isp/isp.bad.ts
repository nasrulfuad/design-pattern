export interface Person {
  shoot(): void;
  swim(): void;
  sing(): void;
  dance(): void;
}

export class John implements Person {
  public shoot(): void {
    // some method
  }

  public swim(): void {
    // John can't swim
  }

  public sing(): void {
    // John can't sing
  }

  public dance(): void {
    // some method
  }
}
