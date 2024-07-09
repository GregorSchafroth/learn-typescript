class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName () {
    return this.firstName + ' ' + this.lastName;
  }
}

class Student extends Person {
  takeTest() {
    console.log('Taking a test');
  }
}

class Teacher extends Person {
  override get fullName () {
    return 'Professor ' + super.fullName;
  }
}

let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName)