// ✅ Task for You:
// Create a SmartPhone class using composition:
// Camera, Battery, and Display classes.
// Each should have a method (takePhoto(), checkBattery(), showScreen()).
// Use them inside SmartPhone.
// Let me know once you finish it or if you'd like the sample solution.

class Battery {
  power: number;
  charge: number;
  capacity: number;
  constructor(power: number, charge: number, capcaity: number) {
    this.power = power;
    this.charge = charge;
    this.capacity = capcaity;
  }
  checkBattery() {
    console.log(
      `Power:${this.power} charge:${this.charge}% capacity:${this.capacity}`
    );
  }
}

class Camera {
  resulations: number;
  type: string;
  constructor(resulations: number, type: string) {
    this.resulations = resulations;
    this.type = type;
  }
  takePhoto() {
    console.log(`Camer clicking a Photo.....`);
  }
  details() {
    console.log(`Resulation:${this.resulations} camera_Type:${this.type}`);
  }
}

class Display {
  type: string;
  resulations: number;
  constructor(type: string, resulations: number) {
    this.type = type;
    this.resulations = resulations;
  }
  showScreen() {
    console.log(
      `Display type: ${this.type}, Display Resulations:${this.resulations}`
    );
  }
}

class SmartPhone {
  battery: Battery;
  camera: Camera;
  display: Display;
  constructor(battery: Battery, camera: Camera, display: Display) {
    this.battery = battery;
    this.camera = camera;
    this.display = display;
  }
  phoneInfo() {
    console.log("\n📱 SmartPhone Info:");
    this.battery.checkBattery();
    this.camera.details();
    this.display.showScreen();
  }
  usePhone() {
    this.camera.takePhoto();
    console.log("Using apps on the screen...");
  }
}

let battery = new Battery(3.7, 98, 5000);
let camera = new Camera(50, "Photo");
let display = new Display("Amoled", 1080);

const moto45 = new SmartPhone(battery, camera, display);

moto45.phoneInfo();