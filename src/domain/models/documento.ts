export class Documento {
    constructor(
        public id: string,
        public name: string,
        public tipo: string,
        public contenido: string,
        public fechaCreacion: Date,
    ) {}

}
