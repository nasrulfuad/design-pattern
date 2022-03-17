import {
  EDeliverType,
  IFactory,
  ILogistic,
  TLogisticType,
} from "./factory-method.types";

namespace FactorySolution {
  export class LogisticFactory implements IFactory {
    create(option: TLogisticType): ILogistic {
      if (option.type === EDeliverType.BY_LAND) {
        return new Truck(option.qty);
      } else if (option.type === EDeliverType.BY_SEA) {
        return new Ship(option.qty);
      }

      throw new Error("Deliver type is unkown");
    }
  }

  export class Truck implements ILogistic {
    constructor(public qty: number) {}

    deliver(): void {
      console.log(`send ${this.qty} by truck`);
    }
  }

  export class Ship implements ILogistic {
    constructor(public qty: number) {}

    deliver(): void {
      console.log(`send ${this.qty} by ship`);
    }
  }
}

export function bootstrapFactory() {
  const logistic = new FactorySolution.LogisticFactory();

  const senderByLand = logistic.create({
    type: EDeliverType.BY_LAND,
    qty: 100,
  });

  const senderBySea = logistic.create({
    type: EDeliverType.BY_SEA,
    qty: 100,
  });

  senderByLand.deliver();
  senderBySea.deliver();
}
