namespace SingletonSolution {
  export class Auth {
    private static instance: Auth;
    private firstName: string = "";
    private lastName: string = "";

    public static getInstance(): Auth {
      if (!Auth.instance) {
        Auth.instance = new Auth();
      }

      return Auth.instance;
    }

    profile() {
      this.firstName = "John";
      this.lastName = "Doe";

      return `${this.firstName} ${this.lastName}`;
    }
  }
}

export function bootstrapSingleton() {
  const auth = SingletonSolution.Auth.getInstance();
  const auth2 = SingletonSolution.Auth.getInstance();

  console.log(auth.profile() === auth2.profile()); // true
}
