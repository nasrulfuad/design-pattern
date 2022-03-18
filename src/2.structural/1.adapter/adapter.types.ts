export namespace Adapter {
  export interface BaseData {
    getData(): { name: string; brand: string };
  }

  export interface IProduct extends BaseData {
    name: string;
    brand: string;
  }

  export interface IMaterial {
    name: string;
    qty: number;
  }

  export class Product implements IProduct {
    constructor(public name: string, public brand: string) {}

    getData(): { name: string; brand: string } {
      return {
        name: this.name,
        brand: this.brand,
      };
    }
  }

  export class Material implements IMaterial {
    constructor(public name: string, public qty: number) {}

    getData(): { name: string; qty: number } {
      return {
        name: this.name,
        qty: this.qty,
      };
    }
  }
}
