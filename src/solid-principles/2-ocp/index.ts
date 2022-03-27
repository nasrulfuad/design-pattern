import { Rectangle, Circle, AreaCalculator } from "./ocp.good";

/**
 * Open-Close Principle
 * Software entities … should be open for extension, but closed for modification
 *
 * Prinsip yang menyatakan bahwa Objek atau entitas itu terbuka untuk ekstensi tetapi tertutup untuk modifikasi.
 * Singkatnya, sebuah class harus bisa dikembangkan tanpa memodifikasi kelas itu sendiri
 */
export default function () {
  const rectangle = new Rectangle(10, 20);
  const circle = new Circle(30);
  const areaCalculator = new AreaCalculator();

  areaCalculator.calculateArea(rectangle);
  areaCalculator.calculateArea(circle);
}
