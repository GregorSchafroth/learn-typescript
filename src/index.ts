class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName () {
    return this.firstName 
  }
}

class Student extends Person {
  constructor(public studentId: number, public firstName: string, public lastName: string){
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking a test');
  }
}

let student = new Student(1, 'Greg', 'greg@gmail.com');