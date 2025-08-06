class DogO {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public bark() {
    console.log(`${this.name} says Woof!`);
  }
}

const d = new DogO("Tommy");
d.bark();
