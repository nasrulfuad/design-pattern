namespace PrototypeSolution {
  export class User {
    constructor(private username: string, private password: string) {}

    setUsername(value: string): this {
      this.username = value;
      return this;
    }

    setPassword(value: string): this {
      this.password = value;
      return this;
    }

    clone(): User {
      return new User(this.username, this.password);
    }
  }
}

export function bootstrapPrototype() {
  const user1 = new PrototypeSolution.User("John", "www");
  const user2 = user1.clone().setPassword("new password");

  console.log(user1);
  console.log(user2);
}
