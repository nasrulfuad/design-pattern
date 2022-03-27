class Product {
  constructor(private name: string, private price: number) {}

  getProduct() {
    return {
      name: this.name,
      price: this.price,
    };
  }
}

const productA = new Product("A", 10);
productA.getProduct();

// kita perlu menambahkan properti tax pada produk yg di import, solusinya kita pake design pattern decorator
const productAImport = Object.assign(productA.getProduct(), { tax: 5 }); // { name: 'A', price: 10, tax: 5 }
productAImport.price += 2000;
