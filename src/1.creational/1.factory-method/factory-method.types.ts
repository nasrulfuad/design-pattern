interface ILogistic {
  qty: number;
  deliver(): void;
}

interface IFactory {
  create(option: TLogisticType): ILogistic;
}

enum EDeliverType {
  BY_LAND,
  BY_SEA,
}

type TLogisticType = {
  qty: number;
  type: EDeliverType;
};

export { ILogistic, IFactory, EDeliverType, TLogisticType };
