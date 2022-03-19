namespace Composite {
  export abstract class Category {
    children: Category[] = [];
    protected parent: Category | null = null;

    constructor(protected name: string) {}

    setParent(parent: Category | null): this {
      this.parent = parent;
      return this;
    }

    getParent(): Category | null {
      return this.parent;
    }

    isComposite(): boolean {
      return false;
    }

    abstract getName(): string;
  }

  export class Product extends Category {
    getName(): string {
      return this.name;
    }
  }

  export class CategoryComposite extends Category {
    constructor(protected name: string) {
      super(name);
    }

    getName(): string {
      return this.name;
    }

    add(category: Category) {
      this.children.push(category);

      category.setParent(this);
    }

    remove(category: Category) {
      const categoryIndex = this.children.indexOf(category);

      this.children.splice(categoryIndex, 1);

      category.setParent(null);
    }

    isComposite(): boolean {
      return true;
    }
  }
}

export function bootstrapComposite() {
  /** composites */
  const category = new Composite.CategoryComposite("Category");
  const computer = new Composite.CategoryComposite("Computer");
  const fashion = new Composite.CategoryComposite("Fashion");

  const pc = new Composite.CategoryComposite("PC");
  const laptop = new Composite.CategoryComposite("Laptop");
  const peripheral = new Composite.CategoryComposite("peripheral");

  const motherboard = new Composite.CategoryComposite("motherboard");
  const casing = new Composite.CategoryComposite("casing");

  /** product */
  const macbook = new Composite.Product("Macbook Pro 2020");
  const asusROG = new Composite.Product("Asus ROG");

  category.add(computer);
  category.add(fashion);

  computer.add(pc);
  computer.add(laptop);
  computer.add(peripheral);

  pc.add(casing);
  pc.add(motherboard);
  laptop.add(macbook);
  laptop.add(asusROG);

  const print = (category: Composite.Category, dot: number = 1) => {
    console.log(` `.repeat(dot), " ", category.getName());

    category.children.forEach((c) => {
      if (c.isComposite()) {
        print(c, dot + 4);
      } else {
        console.log(` `.repeat(dot + 4), " (product)", c.getName());
      }
    });
  };

  print(category);
}
