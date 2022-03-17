import { EComputerType, EMonitorType } from "./abstract-factory.types";
import { Computer, Laptop, PC } from "./model.factory";

class LEDComputerFactory {
  static buildComputer(type: EComputerType): Computer {
    if (type === EComputerType.PC) {
      return new PC(EMonitorType.LED);
    } else if (type === EComputerType.LAPTOP) {
      return new Laptop(EMonitorType.LED);
    }

    throw new Error("Computer type is unknown");
  }
}

class IPSComputerFactory {
  static buildComputer(type: EComputerType): Computer {
    if (type === EComputerType.PC) {
      return new PC(EMonitorType.IPS);
    } else if (type === EComputerType.LAPTOP) {
      return new Laptop(EMonitorType.IPS);
    }

    throw new Error("Computer type is unknown");
  }
}

class ComputerFactory {
  static build(
    computerType: EComputerType,
    monitorType: EMonitorType
  ): Computer {
    switch (monitorType) {
      case EMonitorType.LED:
        return LEDComputerFactory.buildComputer(computerType);
      case EMonitorType.IPS:
        return IPSComputerFactory.buildComputer(computerType);
      default:
        throw new Error("Monitor type is unknown");
    }
  }
}

export function bootstrapAbstractFactory() {
  // Abstract factory lebih ribet daripada factory method
  const pcLED = ComputerFactory.build(EComputerType.PC, EMonitorType.LED);
  pcLED.getModel();
}
