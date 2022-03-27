/**
 * Validate product
 * name < 20 characters
 * price < 1jt
 * weight < 5kg
 */
namespace NoChainOfResponsibility {
  class Product {
    constructor(
      private name: string,
      private price: number,
      private weight: number
    ) {}

    validate() {
      if (this.name.length > 20) {
        return "name should be less than 20 characters";
      }

      if (this.price > 1_000_000) {
        return "price cannot be greater than 1jt";
      }

      if (this.weight > 5) {
        return "weight should be less than 5kg";
      }

      return this;
    }
  }
}
