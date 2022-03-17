namespace BuilderSolution {
  class User {
    public username: string = "";
    public password: string = "";

    getDetails() {
      console.log(`${this.username}, ${this.password}`);
    }
  }

  export class UserBuilder {
    private user: User;

    constructor() {
      this.user = new User();
    }

    setUsername(value: string): this {
      this.user.username = value;
      return this;
    }

    setPassword(value: string): this {
      this.user.password = value;
      return this;
    }

    build(): User {
      return this.user;
    }
  }
}

export function bootstrapBuilder() {
  const builder = new BuilderSolution.UserBuilder();

  const user1 = builder.setUsername("John").setPassword("ppp").build();
  user1.getDetails();
}
