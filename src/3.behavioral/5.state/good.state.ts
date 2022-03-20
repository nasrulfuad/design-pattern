import { IProduct } from "./state.types";

/**
 * State, design pattern that allow you to change another object depends on a state (value)
 */
namespace State {
  export class FeaturedProduct {
    constructor(private state: IProduct) {}

    setFeatured(state: IProduct) {
      this.state = state;
    }

    getFeatured(): void {
      console.log(this.state);
    }

    publish(): void {
      this.state.saveAsFeatured();
    }
  }

  export class FashionProduct implements IProduct {
    constructor(public name: string) {}

    saveAsFeatured(): void {
      console.log(`set product ${this.name} as featured`);
    }
  }

  export class ElectronicProduct implements IProduct {
    constructor(public name: string) {}

    saveAsFeatured(): void {
      console.log(`set product ${this.name} as featured`);
    }
  }
}

export function bootstrapState() {
  const productFashionA = new State.FashionProduct("Fashion A");
  const productFashionB = new State.FashionProduct("Fashion B");
  const productElectronicA = new State.ElectronicProduct("Electronic A");

  const featuredProduct = new State.FeaturedProduct(productFashionA);
  featuredProduct.publish();
  featuredProduct.getFeatured();

  featuredProduct.setFeatured(productElectronicA);
  featuredProduct.publish();
  featuredProduct.getFeatured();
}
