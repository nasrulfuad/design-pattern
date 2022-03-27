export interface Developer {
  develop(): void;
}

/** Module low level */
export class FrontendDeveloper implements Developer {
  public develop(): void {
    this.writeHtmlCode();
  }

  private writeHtmlCode(): void {
    // some method
    console.log("FE coding...");
  }
}

/** Module low level */
export class BackendDeveloper implements Developer {
  public develop(): void {
    this.writeJavaScriptCode();
  }

  private writeJavaScriptCode(): void {
    // some method
    console.log("BE coding...");
  }
}

/** Module high level doesn't depend on module low level */
export class SoftwareProject {
  constructor(private developers: Developer[]) {}

  public startDevelopment(): void {
    this.developers.forEach((developer: Developer) => {
      developer.develop();
    });
  }
}
