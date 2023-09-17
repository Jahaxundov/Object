"use strict"

// function reverse(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverse("Fidan"));


//6dan evvel bele yazirdilar
// 1)
// let stu2=new Object();
// stu2.name="test";
// console.log(stu2.name);

// 2)
// function Test(a,b){
//     this.name=a;
//     this.surname=b;
// }

// let test1=new Test("xxx","yyy");
// console.log(test1.name);
// test1.age=50;
// console.log(test1)


// let stu ={
//     name:"Samir",
//     surname:"Qehramanov",
//     age:24
// }



let stu1 = {
    id: 1,
    name: "Huseyn",
    surname: "Huseynov",
    age: 20,
    adress: "Ecemi"
}

let stu2 = {
    id: 2,
    name: "Aydemir",
    surname: "Resulov",
    age: 19,
    adress: "Turkiye"
}

let stu3 = {
    id: 3,
    name: "Idmanci",
    surname: "Axundov",
    age: 20,
    adress: "Xetai"
}

let stu4 = {
    id: 4,
    name: "Samir",
    surname: "Qehramanov",
    age: 24,
    adress: "Californiya"
}

let group = {
    name: "P139",
    capacity: 3,
    students: [],
    addStudent: function (student) {
        if (student == undefined) {
            alert("Parametr is empty");
            return;
        }
        if (this.students.length == this.capacity) {
            alert("Group already full");
            return;
        }

        this.students.push(student);
    },
    getAllStudents: function () {
        return this.students;
    },
    getStudentById: function (id) {
        let existStudent = this.students.find(m => m.id == id);

        if (existStudent == undefined) {
            alert("Not found")
            return;
        }
        return existStudent;
    },
    updateStudent:function(student){

     // let existStudent=this.student.find(m=>m.id==id);

        // if(existStudent==undefined){
        //     alert("Student not found");
        //     return;
        // }

        let existStudent = this.getStudentById(student.id);

        existStudent.name = student.name == undefined ? existStudent.name : student.name;
        existStudent.surname = student.surname == undefined ? existStudent.surname : student.surname;
        existStudent.age = student.age == undefined ? existStudent.age : student.age;
        existStudent.address = student.address == undefined ? existStudent.address : student.address;
    }

}

group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
group.addStudent(stu4);

// let result=group.getAllStudents();
// console.log(result);

// console.log(group.getStudentById(1));

// let studentsBefore=group.getAllStudents();
// console.log(studentsBefore);

// let updateStu={
//     id: 2,
//     name: "Test1",
//     surname: "Test2",
//     age: 24,
//     adress: "New York"
// }

// group.updateStudent(updateStu);

// console.log("------------------------");

// let studentsAfter=group.getAllStudents();
// console.log(studentsAfter);



class Person{
    constructor(name,surname){
        this.name=name;
        this.surname=surname;
        // this.age=25;
        // this.getFullName=function(){
        //     return this.name + "-" + this.surname; 
        // }
    }
}

let person1=new Person("Surac","Ismayilov");
let person2=new Person("Xeyyam","Isgenderov");

// person1.age=40;

// console.log(person1.name+ "-"+person1.surname+ "-"+person1.age);
// console.log(person2.name+ "-"+person2.surname+ "-"+person2.age);

// console.log(person1.getFullName());
// console.log(person2.getFullName());


// Person.prototype.getFullName=function(){
//     return this.name + "-" + this.surname;
// }

// console.log(person1.getFullName());
// console.log(person2.getFullName());

// let name="Surac";
// let surname="Ismayilov";

// String.prototype.test="Salamlar";
// console.log(name.test);


// String.prototype.hasDigitForStr=function(str){
//     return this.includes(str)
// }

// console.log(name.hasDigitForStr("d"));

// console.log(surname.hasDigitForStr("y"));




// for (const item of result) {
//     let li=document.createElement("li");
//     let str=`${item.name} - ${item.surname} - ${item.age} - ${item.adress}`;
//     li.innerText=str;
//     document.querySelector("ul").append(li);

// }

// let result1=confirm("Are you sure ?");