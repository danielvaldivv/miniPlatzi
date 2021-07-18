// objeto literal
const natalia = {
    name: "Natalia",
    age:20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    } // Método del objeto literal natalia
}; 
natalia.cursosAprobados.push("Curso de Resposive Desing")


// Prototipos con funciones
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso Básico de JavaScript",
        "Curso Practico de JavaScript"
    ]
)

//Prototipos con la sintaxis de clases
class Student2 {
    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
    }){
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}
const miguelito = new Student2({
    email: "miguelito@platzi.com",
    name: "Miguel Alfonso",
    age: 28,
    
});