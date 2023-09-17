"use strict";


let stu1 = {
    id: 1,
    name: "Huseyn",
    surname: "Huseynov",
    age: 20,
    address: "Ecemi"
}

let stu2 = {
    id: 2,
    name: "Aydemir",
    surname: "Resulov",
    age: 19,
    address: "Turkiya"
}

let stu3 = {
    id: 3,
    name: "Cahangir",
    surname: "Axundov",
    age: 20,
    address: "Xetai"
}

let stu4 = {
    id: 4,
    name: "Samir",
    surname: "Qehremanov",
    age: 24,
    address: "Californiya"
}




let group = {
    name: "P139",
    capacity: 4,
    students: [],
    addStudent: function (student) {
        if (student == undefined) {
            alert("Parametr is empty");
            return;
        }

        if (this.students.length == this.capacity) {
            alert("Group is already full");
        }
        this.students.push(student);
    },
    getAllStudents: function () {
        return this.students;
    },

    getStudentById: function (id) {
        let existStudent = this.student.find(m => m.id == id);

        if (existStudent == undefined) {
            alert("Student not found");
            return;
        }
        return existStudent;
    },

    updateStudent: function (student) {
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
    },

    searchStudent: function(text){
        let result=this.getAllStudents();
        for (const student of result) {
            if(student.name.toLowerCase().includes(text) || student.surname.toLowerCase().includes(text)){
                console.log(`${student.name} ${student.surname}` );
            }
        }
    }

 
}

group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
group.addStudent(stu4);
// console.log(group.getAllStudents());

group.searchStudent("caha");



