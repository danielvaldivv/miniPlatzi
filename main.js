//Programación Orientada a Objetos
//Creación de Clases y de Instancias
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        approvadesCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
        };
        this.approvadesCourses = approvadesCourses;
        this.learningPaths = learningPaths;
    }
};

class LearningPaths{
    constructor({
        nameLearningPath,
        courses,
    }) {
        this.nameLearningPath = nameLearningPath;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPaths({
    nameLearningPath:"Escuela de Desarrollo Web",
    courses: [
        "Curso de Computación Básica",
        "Curso Básico de Algoritmos y Pensamiento Lógico",
        "Curso de Fundamentos de Ingeniería de Software",
        "Curso de Prework:Configuración de Entorno de Desarrollo en Windows",
        "Curso de Introducción a la Terminal de Linea de Comandos",
        "Curso Profesional de Git y GitHub",
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
        "Curso de Preprocesadore CSS",
        "Curso de Frontend Developer",
        "Curso de Programación Orientada a Objetos",
        "Curso Básico de Programación Orientada a Objetos con JavaScript",
    ]
});
const escuelaDataScience = new LearningPaths({
    nameLearningPath:"Escuela de Data Science",
    courses: [
        "Curso de Análisis de Negocios para Ciencias de Datos",
        "Curso Básico de Phyton",
        "Curso de Introducción a la Terminal de Linea de Comandos",
        "Curso Profesional de Git y GitHub",
        "Curso de Fundamentos de Matemáticas",
        "Curso de Python Intermedio",
        "Curso de Introducción al Pensamiento Computacional con Phyton",
    ]
});

const juan2 = new Student({
    name:"JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: escuelaWeb,
});
juan2.approvadesCourses.push(escuelaWeb.courses[1])
juan2.approvadesCourses.push(escuelaWeb.courses[3])
juan2.approvadesCourses.push(escuelaWeb.courses[4])
juan2.approvadesCourses.push(escuelaWeb.courses[7])

const miguelito2 = new Student({
    name:"Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@platzi.com",
    twitter: "miguelito_feliz",
    learningPaths: escuelaDataScience,
});
