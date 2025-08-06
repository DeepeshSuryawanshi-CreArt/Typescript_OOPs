class MathHelper {
  static PI = 3.14;

  static square(x: number): number {
    return x * x;
  }
}

console.log(MathHelper.PI);       // 3.14
console.log(MathHelper.square(5)); // 25

// You didn’t create an object of MathHelper, right? ✅ That’s the power of static.