/** Hindari recode yg sama */
namespace Facade {
  function operation(num1: number, num2: number) {
    const operation1 = num1 + num2;
    const operation2 = operation1 * 25;
    return operation2 / 5;
  }

  export function calculate(num1: number, num2: number) {
    return operation(num1, num2);
  }

  export function calculate2(num1: number, num2: number) {
    return operation(num1, num2) + 10;
  }
}

export function bootstrapFacade() {
  const op1 = Facade.calculate(10, 10);
  const op2 = Facade.calculate2(10, 10);

  console.log(op1);
  console.log(op2);
}
