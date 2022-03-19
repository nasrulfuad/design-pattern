/**
 * Categories :
 *
 *  - Computer
 *    - PC
 *         - Case
 *         - Motherboard
 *    - Laptop
 *          - Asus ROG
 *          - Macbook Pro
 *    - Peripheral
 *          - HDD
 *                - Seaget
 *                - WD
 *          - RAM
 *                - DDR3
 *                - DDR4
 *          - Keyboard
 *                - Mechanical
 *                      - Keychron
 *                      - Tecware
 *                - Standard
 *                      - Logitec
 */

class Category {
  children: Category[] = [];

  constructor(private name: string) {}
}

const computer = new Category("Computer");

const PC = new Category("PC");
PC.children = [new Category("Case"), new Category("Motherboard")];

const laptop = new Category("Laptop");
laptop.children = [new Category("Macbook Pro"), new Category("Asus ROG")];

computer.children = [PC, new Category("Laptop"), new Category("Peripheral")];
// RIBET, parent tidak tau
