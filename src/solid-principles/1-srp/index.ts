import { Book, Persistence } from "./srp.good";

/**
 * Single Responsibility Principle.
 * There should never be more than one reason for a class to change
 *
 * Setiap class hanya memiliki satu tugas, sehingga alasan untuk merubah
 * class tersebut hanya satu, yaitu merubah tugas yang diberikan kepadanya
 */
export default function () {
  const book = new Book("title", "author", "desc", 10);
  const persistence = new Persistence();

  persistence.saveToFile(book);
}
