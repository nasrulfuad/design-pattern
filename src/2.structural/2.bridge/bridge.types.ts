interface IPrice {
  name: string;
  sellPrice(): string;
}

interface IProduct {
  name: string;
}

export { IPrice, IProduct };
