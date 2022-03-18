/**
 *                              Store
 *            ProductType (bridge to price)                               Price (bridge to product)
 *    Fashion(Price)   Phone(Price)                                   Cheap    Expensive
 */

import { IPrice, IProduct } from "./bridge.types";

namespace Bridge {
  export namespace Price {
    export class PriceCheap implements IPrice {
      name: string = "cheap";

      sellPrice(): string {
        return "cheap";
      }
    }

    export class PriceExpensive implements IPrice {
      name: string = "expensive";

      sellPrice(): string {
        return "expensive";
      }
    }
  }

  /** Bridge between product and price */
  export abstract class Product implements IProduct {
    constructor(public name: string, protected price: IPrice) {}
  }

  export class Fashion extends Product {
    detail() {
      console.log(`Product ${this.name} with price ${this.price.name}`);
    }
  }

  export class Phone extends Product {
    detail() {
      console.log(`Product ${this.name} with price ${this.price.name}`);
    }
  }
}

export function bootstrapBridge() {
  const shirt = new Bridge.Fashion("flanel", new Bridge.Price.PriceCheap());
  shirt.detail();

  const xiaomi = new Bridge.Phone(
    "xiaomi redmi note 8 pro",
    new Bridge.Price.PriceExpensive()
  );
  xiaomi.detail();
}
