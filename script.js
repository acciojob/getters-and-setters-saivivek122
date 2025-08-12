//complete this code
class Person {
	constructor(name, age){
		this._name=name;
		this._age=age;
	}
	get name(){
		return this._name;
	}

	set age(age){
		this._age=age;
	}

	get age(){
		return this._age;
	}
}

class Student extends Person {
	constructor(name){
		super(name)
	}
	study(){
		return this.name+"is studying"
	}
}

class Teacher extends Person {
	constructor(name){
		super(name)
	}

	teach(){
		return this.name+"is teaching"
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
