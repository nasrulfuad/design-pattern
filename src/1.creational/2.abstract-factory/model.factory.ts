import { EComputerType, EMonitorType } from "./abstract-factory.types";

abstract class Computer {
  constructor(protected type: EComputerType, protected monitor: EMonitorType) {}

  abstract getModel(): void;
}

class PC extends Computer {
  constructor(protected monitor: EMonitorType) {
    super(EComputerType.PC, monitor);
  }

  getModel(): void {
    console.log(`${this.type} with ${this.monitor}`);
  }
}

class Laptop extends Computer {
  constructor(protected monitor: EMonitorType) {
    super(EComputerType.LAPTOP, monitor);
  }

  getModel(): void {
    console.log(`${this.type} with ${this.monitor}`);
  }
}

export { PC, Laptop, Computer };
