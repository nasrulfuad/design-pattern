namespace Proxy {
  interface IRequest {
    request(): Promise<string>;
  }

  export class API implements IRequest {
    request() {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          console.log("API called");
          resolve("Hello there");
        }, 2000);
      });
    }
  }

  export class ProxyAPI implements IRequest {
    private data: string | null = null;

    constructor(private api: API) {}

    async request(): Promise<string> {
      if (this.data) {
        console.log("data from cache");
        return this.data;
      }

      const response = await this.api.request();
      this.data = response;
      return response;
    }
  }
}

export async function bootstrapProxy() {
  const api = new Proxy.API();
  const caller = new Proxy.ProxyAPI(api);

  await caller.request();
  await caller.request();
}
