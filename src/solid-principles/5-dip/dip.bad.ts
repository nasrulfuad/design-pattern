/** Module low level */
export class FrontendDeveloper {
  public writeHtmlCode(): void {
    // some method
  }
}

/** Module low level */
export class BackendDeveloper {
  public writeJavaScriptCode(): void {
    // some method
  }
}

/** Module high level depends on module low level */
export class SoftwareProject {
  constructor(
    private frontendDeveloper: FrontendDeveloper,
    private backendDeveloper: BackendDeveloper
  ) {}

  public createProject(): void {
    this.frontendDeveloper.writeHtmlCode();
    this.backendDeveloper.writeJavaScriptCode();
  }
}
