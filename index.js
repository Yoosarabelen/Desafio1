class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `Nombre: ${this.nombre} Apellido ${this.apellido}`;
    }

    addMascotas(newMascotas) {
        this.mascotas.push(newMascotas);
        
        
    }

    countMasctoas() {
        return this.mascotas.length;
    }

    addBook(nameBook, nameAutor) {
        this.libros.push({ nombre: nameBook, autor: nameAutor});
    }

    getBookNames() {
        let bookName = this.libros.map((book) => {
            return book.nombre;
        })

        return bookName;
    }
}

let libros1 = [
    {
        nombre : "Nombre Libro Num1",
        autor: "Autor Num1",
    },
    {
        nombre: "Nombre Libro Num2",
        autor: "Autor Num2",
    }
];

const mascotas1 = [
    `mascota1`,
    `mascota2`,
    `mascota3`
];

    
const usuario1 = new Usuario(`Sara`, `Yoo`, libros1, mascotas1);

console.log(usuario1.getFullName());
console.log(`Total de mascotas:` , usuario1.countMasctoas());

usuario1.addMascotas(`mascota4`);
console.log(`Total de mascotas:`, usuario1.countMasctoas());
console.log(`libros`, usuario1.getBookNames());
usuario1.addBook(`Nombre Libro`, `Autor`);
console.log(`libros`, usuario1.getBookNames());


    
 