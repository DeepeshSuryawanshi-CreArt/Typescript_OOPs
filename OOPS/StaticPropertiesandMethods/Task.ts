// 🏗️ Your Practice Task:
// Create a class Counter with:
// static property count = 0
// static method increment() that increases count by 1
// static method getCount() that prints current count
// Call:
// Counter.increment()
// Counter.increment()
// Counter.getCount()
class Counter{
    static count = 0
    static increment(){
        this.count++;
    }
    static get_count(){
        console.log(`Count value is : ${this.count}`)
    }
}
Counter.increment()
Counter.increment()
Counter.get_count()