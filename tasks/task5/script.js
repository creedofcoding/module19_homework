class Device {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.is_enabled = false;
  }

  turnOn() {
    console.log(`${this.name} is now enabled`);
    this.is_enabled = true;
  }

  getPower() {
    return this.is_enabled ? this.power : 0;
  }
}

const laptop = new Device("Laptop", 1000);
const screen = new Device("LG Screen", 500);

console.log(`Laptop's power: ${laptop.getPower()}, screen's power: ${screen.getPower()}`);

laptop.turnOn();
console.log(`Laptop's power: ${laptop.getPower()}, screen's power: ${screen.getPower()}`);

screen.turnOn();
console.log(`Laptop's power: ${laptop.getPower()}, screen's power: ${screen.getPower()}`);