import { Adapter } from "./adapter.types";

// name  | brand
// --------------
// mobil | Honda
// besi  | -
// roda  | -
const list: any[] = [];
const product = new Adapter.Product("Mobil", "DeLorean");
list.push(product.getData());

const material1 = new Adapter.Material("besi", 10);
const material2 = new Adapter.Material("roda", 4);

list.push(material1.getData());
list.push(material2.getData());

console.log(list);
