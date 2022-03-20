/** Example
 *
 * user1, user2, user3
 *        app <----- MEDIATOR
 * service1, service2, service3
 *
 */

namespace Mediator {
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

  export class Product implements IProduct {
    constructor(public name: string, private mediator: IMediator) {}

    sell(): void {
      if (this.mediator.isAvailable()) {
        this.mediator.setAvailableStatus(false);
        console.log(`product ${this.name} successfully sold`);
      } else {
        if (this.mediator.getProductRegistered()?.name !== this.name) {
          console.log(
            "product is not open for sell, need to be registered first"
          );
        }
      }
    }
  }

  export class ProductMediator implements IMediator {
    private product?: IProduct;
    private status: boolean = false;

    registerProduct(product: IProduct): void {
      if (this.status) {
        console.log(
          "cannot register new product, the previous product did not sold yet"
        );
      } else {
        this.product = product;
        this.status = true;
        console.log("product registered successfully");
      }
    }

    getProductRegistered(): IProduct {
      if (this.status && this.product) {
        console.log(this.product);
        return this.product;
      } else {
        console.log("no product registered");
        return {
          name: "",
          sell: () => {},
        };
      }
    }

    setAvailableStatus(status: boolean): void {
      this.status = status;
    }

    isAvailable(): boolean {
      return this.status;
    }
  }
}

export function bootstrapMediator() {
  const mediator = new Mediator.ProductMediator();

  const productA = new Mediator.Product("A", mediator);
  const productB = new Mediator.Product("B", mediator);

  mediator.registerProduct(productA);
  mediator.registerProduct(productB);
  productA.sell();
}
