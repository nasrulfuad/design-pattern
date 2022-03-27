import { DecoratorTypes } from "./decorator.types";

namespace Decorator {
  export class Product implements DecoratorTypes.IProduct {
    constructor(protected name: string, protected price: number) {}

    getProduct() {
      return {
        name: this.name,
        price: this.price,
      };
    }
  }

  abstract class ProductDecorator implements DecoratorTypes.IProduct {
    constructor(protected product: Product) {}

    abstract getProduct(): any;
  }

  /** Product import dengan taxt decorator */
  export class ProductImportDecorator extends ProductDecorator {
    getProduct() {
      return {
        name: this.product.getProduct().name,
        price: this.product.getProduct().price + 10,
        tax: 20,
      };
    }
  }
}

export function bootstrapDecorator() {
  const productAImport = new Decorator.ProductImportDecorator(
    new Decorator.Product("A", 20)
  );

  console.log(productAImport.getProduct());
}
