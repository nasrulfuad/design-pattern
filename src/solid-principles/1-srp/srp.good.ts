export class Book {
  constructor(
    public title: string,
    public author: string,
    public description: string,
    public pages: number
  ) {}

  // some methods
}

export class Persistence {
  public saveToFile(book: Book): void {
    console.log("Saving a book : ", book.title);
    // some fs.write method to save book to file
  }
}
