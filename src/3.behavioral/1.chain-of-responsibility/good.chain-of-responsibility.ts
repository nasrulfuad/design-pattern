import { IHandler, IProduct } from "./chain-of-responsibility.types";

namespace ChainOfResponsibility {
  abstract class AbstractProductHandler implements IHandler<IProduct> {
    private nextHandler: IHandler<IProduct> | null = null;

    setNext(handler: IHandler<IProduct>): IHandler<IProduct> {
      this.nextHandler = handler;
      return handler;
    }

    handle(request: IProduct): IProduct | string {
      if (this.nextHandler) {
        return this.nextHandler.handle(request);
      }

      return request;
    }
  }

  export class ProductNameHandler extends AbstractProductHandler {
    handle(request: IProduct): IProduct | string {
      if (request.name.length > 20) {
        return "name should be less than 20 characters";
      }

      return super.handle(request);
    }
  }

  export class ProductPriceHandler extends AbstractProductHandler {
    handle(request: IProduct): IProduct | string {
      if (request.price > 1_000_000) {
        return "price cannot be greater than 1jt";
      }

      return super.handle(request);
    }
  }

  export class ProductWeightHandler extends AbstractProductHandler {
    handle(request: IProduct): IProduct | string {
      if (request.weight > 5) {
        return "weight should be less than 5kg";
      }

      return super.handle(request);
    }
  }

  export class Product implements IProduct {
    constructor(
      public name: string,
      public price: number,
      public weight: number
    ) {}
  }
}

export function bootstrapChainOfResponsibility() {
  const p1 = new ChainOfResponsibility.Product("p1", 10, 3);
  const p2 = new ChainOfResponsibility.Product("p2", 2_000_0000, 2);
  const p3 = new ChainOfResponsibility.Product("p3", 40, 6);

  const nameHandler = new ChainOfResponsibility.ProductNameHandler();
  const priceHandler = new ChainOfResponsibility.ProductPriceHandler();
  const weightHandler = new ChainOfResponsibility.ProductWeightHandler();

  nameHandler.setNext(priceHandler).setNext(weightHandler);

  console.log(nameHandler.handle(p1));
  console.log(nameHandler.handle(p2));
  console.log(nameHandler.handle(p3));
}
