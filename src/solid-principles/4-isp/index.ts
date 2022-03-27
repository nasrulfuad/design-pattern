import { Jane, John } from "./isp.good";

/**
 * Interface Segregation Principle
 * Many client-specific interfaces are better than one general-purpose interface
 *
 * Prinsip yang menyatakan bahwa sebuah objek client tidak boleh dipaksa untuk
 * mengimplementasikan sebuah interface yang tidak ia gunakan. Atau objek client
 * tidak boleh bergantung pada metode yang tidak ia gunakan
 *
 * Sebuah interface tidak boleh menyediakan semua service untuk client objek.
 * Satu interface hanya memiliki satu tugas spesifik untuk tiap clientnya
 */
export default function () {
  const john = new John();
  const jane = new Jane();

  john.shoot();
  john.dance();

  jane.sing();
  jane.swim();
}
