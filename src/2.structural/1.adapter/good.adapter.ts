import { Adapter } from "./adapter.types";

class MaterialAdapter implements Adapter.BaseData {
  constructor(private adaptee: Adapter.Material) {}

  getData(): { name: string; brand: string } {
    return {
      name: this.adaptee.name,
      brand: "-",
    };
  }
}

export function bootstrapAdapter() {
  const list: any[] = [];
  const product = new Adapter.Product("Mobil", "DeLorean");
  list.push(product.getData());

  const material1 = new Adapter.Material("besi", 10);
  const material2 = new Adapter.Material("roda", 4);

  const materialAdapter1 = new MaterialAdapter(material1);
  const materialAdapter2 = new MaterialAdapter(material2);

  list.push(materialAdapter1.getData());
  list.push(materialAdapter2.getData());

  console.log(list);
}
