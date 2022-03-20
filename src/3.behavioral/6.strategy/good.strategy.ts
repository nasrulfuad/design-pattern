import { INumericConverter } from "./strategy.types";

namespace Strategy {
  export class NumberConverter {
    constructor(private strategy: INumericConverter) {}

    execute(value: number): void {
      this.strategy.convert(value);
    }
  }

  export class NumberToCurrency implements INumericConverter {
    convert(value: number): void {
      console.log(
        value.toLocaleString("id-ID", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "IDR",
        })
      );
    }
  }

  export class NumberToDecimalSeparator implements INumericConverter {
    convert(value: number): void {
      console.log(
        value.toLocaleString("id-ID", {
          minimumFractionDigits: 2,
        })
      );
    }
  }

  export class NumberToDate implements INumericConverter {
    convert(value: number): void {
      console.log(new Date(value * 1000).toUTCString());
    }
  }
}

export function bootstrapStrategy() {
  const NUM = 1_000;

  const currency = new Strategy.NumberConverter(
    new Strategy.NumberToCurrency()
  );
  currency.execute(NUM);

  const decimal = new Strategy.NumberConverter(
    new Strategy.NumberToDecimalSeparator()
  );
  decimal.execute(NUM);

  const date = new Strategy.NumberConverter(new Strategy.NumberToDate());
  date.execute(NUM * 100);
}
