interface IProduct {
  name: string;
  sell(): void;
}

interface IMediator {
  registerProduct(product: IProduct): void;
  getProductRegistered(): IProduct;
  setAvailableStatus(status: boolean): void;
  isAvailable(): boolean;
}

export { IMediator, IProduct };
