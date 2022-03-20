import { IObserver, ISubject } from "./observer.types";

namespace Observer {
  export class PromoSubject implements ISubject {
    private isPromo: boolean = false;
    private observers: IObserver[] = [];

    add(observer: IObserver): void {
      if (this.observers.includes(observer)) {
        console.log(`observer ${observer.name} is already added`);
      } else {
        this.observers.push(observer);
        console.log(`observer ${observer.name} successfully added`);
      }
    }

    remove(observer: IObserver): void {
      const index = this.observers.indexOf(observer);

      if (index === -1) {
        console.log(`observer ${observer.name} not found`);
      } else {
        this.observers.splice(index, 1);
        console.log(`observer ${observer.name} successfully removed`);
      }
    }

    notify(): void {
      for (const observer of this.observers) {
        observer.update(this);
      }
    }

    setPromo(status: boolean): void {
      this.isPromo = status;
      this.notify();
    }

    getIsPromo(): boolean {
      return this.isPromo;
    }
  }

  export class ProductObserver implements IObserver {
    constructor(public name: string) {}

    update(subject: ISubject): void {
      if (subject instanceof PromoSubject && subject.getIsPromo()) {
        console.log(`product ${this.name} is showing for sale`);
      }
    }
  }
}

export function bootstrapObserver() {
  const promo = new Observer.PromoSubject();

  const productA = new Observer.ProductObserver("A");
  const productB = new Observer.ProductObserver("B");
  const productC = new Observer.ProductObserver("C");

  promo.add(productA);
  promo.add(productB);

  promo.setPromo(true);
  promo.remove(productC);

  console.log(promo);
}
