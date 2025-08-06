interface Printable {
  print(): void;
}
class Invoice implements Printable {
  print(): void {
    console.log("Printing Invoice...");
  }
}
class Receipt implements Printable {
  print(): void {
    console.log("Printing Receipt...");
  }
}

const items: Printable[] = [new Invoice(), new Receipt()];
items.forEach((item) => item.print());