class Auth {
  private firstName: string = "";
  private lastName: string = "";

  profile() {
    this.firstName = "John";
    this.lastName = "Doe";

    return `${this.firstName} ${this.lastName}`;
  }
}

const auth = new Auth();
const auth2 = new Auth();

/** recreate profile */
auth.profile() === auth2.profile(); // false
