//Programación Orientada a Objetos
//Creación de Clases y de Instancias
class Comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;        
        this.studentRole = studentRole;
        this.likes = 0;
    }
    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ") ");
        console.log(this.likes + "likes");
        console.log(this.content);
    }
}
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        approvedCourses = [],
        learningPaths = [],
        platziRank = 0,
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
        this._platziRank = platziRank;
    }

    publicarComentario(commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }

    get platziRank(){
        return this._platziRank();
    }
    set platziRank (newPlatziRank) {
        if (typeof newPlatziRank === "number"){
            this._platziRank = newPlatziRank;
        } else {
            console.error("No puedes realizar esta cambio");
        }
    }
};
class FreeStudent extends Student{
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos gratis.")
        }
    }
};

class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse) {
        if (newCourse.lang !== "English"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés.");
        }
    }
};
class ExpertStudent extends Student{
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse) {        
        this.approvedCourses.push(newCourse);
    }
};
class TeacherStudent extends Student{
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse) {        
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor"
        });
        comment.publicar();
    }
};


class LearningPaths{
    constructor({
        nameLearningPath,
        courses = [],
    }) {
        this._nameLearningPath = nameLearningPath;
        this._courses = courses;
    }
    get nameLearningPath(){
        return this._nameLearningPath();
    }
    get courses(){
        return this._courses();
    }
};


class Course {
    constructor({
        nameCourse,
        classes = [],
        isFree = false,
        lang = "spanish",
    }) {
        this.nameCourse = nameCourse;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

}
const cursFreeProgBas = new Course({
    nameCourse: "Curso Gratis de Programación Básica",
    classes: [
        "Clase 1" + " Curso Gratis de Programación Básica",
        "Clase 2" + " Curso Gratis de Programación Básica",
        "Clase 3" + " Curso Gratis de Programación Básica",
        "Clase 4" + " Curso Gratis de Programación Básica",
        "Clase 5" + " Curso Gratis de Programación Básica",
        "Clase 6" + " Curso Gratis de Programación Básica",
        "Clase 7" + " Curso Gratis de Programación Básica",
        "Clase 8" + " Curso Gratis de Programación Básica",
    ],
    isFree: true,
});
const cursoCompBas = new Course({
    nameCourse: "Curso de Computación Básica",
    classes: [
        "Clase 1" + " Curso de Computación Básica",
        "Clase 2" + " Curso de Computación Básica",
        "Clase 3" + " Curso de Computación Básica",
        "Clase 4" + " Curso de Computación Básica",
        "Clase 5" + " Curso de Computación Básica",
        "Clase 6" + " Curso de Computación Básica",
        "Clase 7" + " Curso de Computación Básica",
        "Clase 8" + " Curso de Computación Básica",
    ]
});
const cursBasAlgPenLog = new Course({
    nameCourse: "Curso Básico de Algoritmos y Pensamiento Lógico",
    classes: [
        "Clase 1" + " Curso Básico de Algoritmos y Pensamiento Lógico",
        "Clase 2" + " Curso Básico de Algoritmos y Pensamiento Lógico",
        "Clase 3" + " Curso Básico de Algoritmos y Pensamiento Lógico",
        "Clase 4" + " Curso Básico de Algoritmos y Pensamiento Lógico",
        "Clase 5" + " Curso Básico de Algoritmos y Pensamiento Lógico",
        "Clase 6" + " Curso Básico de Algoritmos y Pensamiento Lógico",
        "Clase 7" + " Curso Básico de Algoritmos y Pensamiento Lógico",
        "Clase 8" + " Curso Básico de Algoritmos y Pensamiento Lógico",
        "Clase 9" + " Curso Básico de Algoritmos y Pensamiento Lógico",
    ]
});
const cursFunIngSoftw = new Course({
    nameCourse: "Curso de Fundamentos de Ingeniería de Software",
    classes: [
        "Clase 1" + " Curso de Fundamentos de Ingeniería de Software",
        "Clase 2" + " Curso de Fundamentos de Ingeniería de Software",
        "Clase 3" + " Curso de Fundamentos de Ingeniería de Software",
        "Clase 4" + " Curso de Fundamentos de Ingeniería de Software",
        "Clase 5" + " Curso de Fundamentos de Ingeniería de Software",
        "Clase 6" + " Curso de Fundamentos de Ingeniería de Software",
    ]
});
const cursPreworkWind = new Course({
    nameCourse: "Curso de Prework:Configuración de Entorno de Desarrollo en Windows",
    classes: [
        "Clase 1" + " Curso de Prework:Configuración de Entorno de Desarrollo en Windows",
        "Clase 2" + " Curso de Prework:Configuración de Entorno de Desarrollo en Windows",
        "Clase 3" + " Curso de Prework:Configuración de Entorno de Desarrollo en Windows",
        "Clase 4" + " Curso de Prework:Configuración de Entorno de Desarrollo en Windows",
        "Clase 5" + " Curso de Prework:Configuración de Entorno de Desarrollo en Windows",
        "Clase 6" + " Curso de Prework:Configuración de Entorno de Desarrollo en Windows",
        "Clase 7" + " Curso de Prework:Configuración de Entorno de Desarrollo en Windows",
    ]
});
const cursIntrTerm = new Course({
    nameCourse: "Curso de Introducción a la Terminal de Linea de Comandos",
    classes: [
        "Clase 1" + " Curso de Introducción a la Terminal de Linea de Comandos",
        "Clase 2" + " Curso de Introducción a la Terminal de Linea de Comandos",
        "Clase 3" + " Curso de Introducción a la Terminal de Linea de Comandos",
        "Clase 4" + " Curso de Introducción a la Terminal de Linea de Comandos",
        "Clase 5" + " Curso de Introducción a la Terminal de Linea de Comandos",
        "Clase 6" + " Curso de Introducción a la Terminal de Linea de Comandos",
        "Clase 7" + " Curso de Introducción a la Terminal de Linea de Comandos",
    ]
});
const cursProfGit = new Course({
    nameCourse: "Curso Profesional de Git y GitHub",
    classes: [
        "Clase 1" + " Curso Profesional de Git y GitHub",
        "Clase 2" + " Curso Profesional de Git y GitHub",
        "Clase 3" + " Curso Profesional de Git y GitHub",
        "Clase 4" + " Curso Profesional de Git y GitHub",
        "Clase 5" + " Curso Profesional de Git y GitHub",
    ]
});
const cursDefHTMLyCSS = new Course({
    nameCourse: "Curso Definitivo de HTML y CSS",
    classes: [
        "Clase 1" + " Curso Definitivo de HTML y CSS",
        "Clase 2" + " Curso Definitivo de HTML y CSS",
        "Clase 3" + " Curso Definitivo de HTML y CSS",
        "Clase 4" + " Curso Definitivo de HTML y CSS",
        "Clase 5" + " Curso Definitivo de HTML y CSS",
        "Clase 6" + " Curso Definitivo de HTML y CSS",
    ]
});
const cursPractHTMLyCSS = new Course({
    nameCourse: "Curso Practico de HTML y CSS",
    classes: [
        "Clase 1" + " Curso Practico de HTML y CSS",
        "Clase 2" + " Curso Practico de HTML y CSS",
        "Clase 3" + " Curso Practico de HTML y CSS",
        "Clase 4" + " Curso Practico de HTML y CSS",
        "Clase 5" + " Curso Practico de HTML y CSS",
        "Clase 6" + " Curso Practico de HTML y CSS",
        "Clase 7" + " Curso Practico de HTML y CSS",
        "Clase 8" + " Curso Practico de HTML y CSS",
        "Clase 9" + " Curso Practico de HTML y CSS",
    ]
});
const cursPrePros = new Course({
    nameCourse: "Curso de Preprocesadore CSS",
    classes: [
        "Clase 1" + " Curso de Preprocesadore CSS",
        "Clase 2" + " Curso de Preprocesadore CSS",
        "Clase 3" + " Curso de Preprocesadore CSS",
        "Clase 4" + " Curso de Preprocesadore CSS",
        "Clase 5" + " Curso de Preprocesadore CSS",
        "Clase 6" + " Curso de Preprocesadore CSS",
        "Clase 7" + " Curso de Preprocesadore CSS",
        "Clase 8" + " Curso de Preprocesadore CSS",
    ]
});
const cursFrontDev = new Course({
    nameCourse: "Curso de Frontend Developer",
    classes: [
        "Clase 1" + " Curso de Frontend Developer",
        "Clase 2" + " Curso de Frontend Developer",
        "Clase 3" + " Curso de Frontend Developer",
        "Clase 4" + " Curso de Frontend Developer",
        "Clase 5" + " Curso de Frontend Developer",
        "Clase 6" + " Curso de Frontend Developer",
        "Clase 7" + " Curso de Frontend Developer",
        "Clase 8" + " Curso de Frontend Developer",
    ]
});
const cursPOO = new Course({
    nameCourse: "Curso de Programación Orientada a Objetos",
    classes: [
        "Clase 1" + " Curso de Programación Orientada a Objetos",
        "Clase 2" + " Curso de Programación Orientada a Objetos",
        "Clase 3" + " Curso de Programación Orientada a Objetos",
        "Clase 4" + " Curso de Programación Orientada a Objetos",
        "Clase 5" + " Curso de Programación Orientada a Objetos",
        "Clase 6" + " Curso de Programación Orientada a Objetos",
        "Clase 7" + " Curso de Programación Orientada a Objetos",
        "Clase 8" + " Curso de Programación Orientada a Objetos",
    ]
});
const cursPOOJS = new Course({
    nameCourse: "Curso Básico de Programación Orientada a Objetos con JavaScript",
    lang: "English",
    classes: [
        "Clase 1" + " Curso Básico de Programación Orientada a Objetos con JavaScript",
        "Clase 2" + " Curso Básico de Programación Orientada a Objetos con JavaScript",
        "Clase 3" + " Curso Básico de Programación Orientada a Objetos con JavaScript",
        "Clase 4" + " Curso Básico de Programación Orientada a Objetos con JavaScript",
        "Clase 5" + " Curso Básico de Programación Orientada a Objetos con JavaScript",
        "Clase 6" + " Curso Básico de Programación Orientada a Objetos con JavaScript",
        "Clase 7" + " Curso Básico de Programación Orientada a Objetos con JavaScript",
        "Clase 8" + " Curso Básico de Programación Orientada a Objetos con JavaScript",
    ]
});
const cursAnNegCienDat = new Course({
    nameCourse: "Curso de Análisis de Negocios para Ciencias de Datos",
    classes: [
        "Clase 1" + " Curso de Análisis de Negocios para Ciencias de Datos",
        "Clase 2" + " Curso de Análisis de Negocios para Ciencias de Datos",
        "Clase 3" + " Curso de Análisis de Negocios para Ciencias de Datos",
        "Clase 4" + " Curso de Análisis de Negocios para Ciencias de Datos",
        "Clase 5" + " Curso de Análisis de Negocios para Ciencias de Datos",
        "Clase 6" + " Curso de Análisis de Negocios para Ciencias de Datos",
        "Clase 7" + " Curso de Análisis de Negocios para Ciencias de Datos",
        "Clase 8" + " Curso de Análisis de Negocios para Ciencias de Datos",
    ]
});
const cursBasPy = new Course({
    nameCourse: "Curso Básico de Phyton",
    classes: [
        "Clase 1" + " Curso Básico de Phyton",
        "Clase 2" + " Curso Básico de Phyton",
        "Clase 3" + " Curso Básico de Phyton",
        "Clase 4" + " Curso Básico de Phyton",
        "Clase 5" + " Curso Básico de Phyton",
        "Clase 6" + " Curso Básico de Phyton",
        "Clase 7" + " Curso Básico de Phyton",
        "Clase 8" + " Curso Básico de Phyton",
        "Clase 9" + " Curso Básico de Phyton",
    ]
});
const cursFunMath = new Course({
    nameCourse: "Curso de Fundamentos de Matemáticas",
    classes: [
        "Clase 1" + " Curso de Fundamentos de Matemáticas",
        "Clase 2" + " Curso de Fundamentos de Matemáticas",
        "Clase 3" + " Curso de Fundamentos de Matemáticas",
        "Clase 4" + " Curso de Fundamentos de Matemáticas",
        "Clase 5" + " Curso de Fundamentos de Matemáticas",
        "Clase 6" + " Curso de Fundamentos de Matemáticas",
    ]
});
const cursIntPy = new Course({
    nameCourse: "Curso de Python Intermedio",
    classes: [
        "Clase 1" + " Curso de Python Intermedio",
        "Clase 2" + " Curso de Python Intermedio",
        "Clase 3" + " Curso de Python Intermedio",
        "Clase 4" + " Curso de Python Intermedio",
        "Clase 5" + " Curso de Python Intermedio",
        "Clase 6" + " Curso de Python Intermedio",
        "Clase 7" + " Curso de Python Intermedio",
    ]
});
const cursIntrPensCompPy = new Course({
    nameCourse: "Curso de Introducción al Pensamiento Computacional con Phyton",
    classes: [
        "Clase 1" + " Curso de Introducción al Pensamiento Computacional con Phyton",
        "Clase 2" + " Curso de Introducción al Pensamiento Computacional con Phyton",
        "Clase 3" + " Curso de Introducción al Pensamiento Computacional con Phyton",
        "Clase 4" + " Curso de Introducción al Pensamiento Computacional con Phyton",
        "Clase 5" + " Curso de Introducción al Pensamiento Computacional con Phyton",
        "Clase 6" + " Curso de Introducción al Pensamiento Computacional con Phyton",
        "Clase 7" + " Curso de Introducción al Pensamiento Computacional con Phyton",
        "Clase 8" + " Curso de Introducción al Pensamiento Computacional con Phyton",
    ]
});

const escuelaWeb = new LearningPaths({
    nameLearningPath:"Escuela de Desarrollo Web",
    courses: [
        cursoCompBas,
        cursFreeProgBas,
        cursBasAlgPenLog,
        cursFunIngSoftw,
        cursPreworkWind,
        cursIntrTerm,
        cursProfGit,
        cursDefHTMLyCSS,
        cursPractHTMLyCSS,
        cursPrePros,
        cursFrontDev,
        cursPOO,
        cursPOOJS,
    ]
});

const escuelaDataScience = new LearningPaths({
    nameLearningPath:"Escuela de Data Science",
    courses: [
        cursAnNegCienDat,
        cursFreeProgBas,
        cursBasPy,
        cursIntrTerm,
        cursProfGit,
        cursFunMath,
        cursIntPy,
        cursIntrPensCompPy,
    ]
});



const diego = new FreeStudent({
    name:"Diego Campillo",
    username: "diego456",
    email: "diegocamp4@platzi.com",
})

const juan = new BasicStudent({
    name:"JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: escuelaWeb,
});
juan.approvedCourses.push(escuelaWeb._courses[1])
juan.approvedCourses.push(escuelaWeb._courses[3])
juan.approvedCourses.push(escuelaWeb._courses[4])
juan.approvedCourses.push(escuelaWeb._courses[7])

const miguelito = new ExpertStudent({
    name:"Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@platzi.com",
    twitter: "miguelito_feliz",
    learningPaths: escuelaDataScience,
});
miguelito.approvedCourses.push(escuelaDataScience._courses[0])
miguelito.approvedCourses.push(escuelaDataScience._courses[1])
miguelito.approvedCourses.push(escuelaDataScience._courses[3])

const Freddy = new TeacherStudent({
    name:"Freddy Vega",
    username: "freddier",
    email: "fredier@platzi.com",
    twitter: "freddier",
});