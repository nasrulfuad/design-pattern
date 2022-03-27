import { FlyBird, WalkBird } from "./lsp.good";

/**
 * Liskov Substitution Principle
 * Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it
 *
 * Singkatnya, setiap kelas turunan harus bisa menjadi pengganti untuk base class atau kelas parent nya
 */
export default function () {
  const pinguin = new WalkBird("Pinguin");
  const eagle = new FlyBird("Eagle");

  pinguin.eat();
  pinguin.walk();

  eagle.eat();
  eagle.fly();
}
