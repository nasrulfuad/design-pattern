class API {
  static async request() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "Hello there" });
      }, 2000);
    });
  }
}

const caller = API.request().then((data) => console.log(data));
const caller2 = API.request().then((data) => console.log(data)); // this will re call the request without cache
