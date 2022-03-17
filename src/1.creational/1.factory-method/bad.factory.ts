class Truck {
  constructor(private qty: number) {}

  deliver(): void {
    console.log(`send ${this.qty} by truck`);
  }
}

class Ship {
  constructor(private qty: number) {}

  deliver(): void {
    console.log(`send ${this.qty} by ship`);
  }
}

let type: "sea" | "land" = "sea";

if (type === "sea") {
  new Ship(20);
} else if (type === "land") {
  new Truck(10);
}
