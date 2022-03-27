interface IHandler<T> {
  setNext(handler: IHandler<T>): IHandler<T>;
  handle(request: T): T | string;
}

interface IProduct {
  name: string;
  price: number;
  weight: number;
}

export { IHandler, IProduct };
