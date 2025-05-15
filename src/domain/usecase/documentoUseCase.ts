import { DocumentoRepository } from "../interface/documentoRepository";
import { Documento } from "../models/documento";
import { DocumentoDto } from "../../infrastructure/ports/dto/documentoDto";

export class documnetoUsecase {
   constructor(private readonly repository : DocumentoRepository ) {}

    async cargarDocumento(documento : DocumentoDto): Promise<Documento> {
        const id :string = Math.random().toString(36).substring(2, 15);
        const nuevoDocumento = new Documento(
            id,
            documento.nome,
            documento.tipo,
            documento.contenido,
            new Date());

         return await this.repository.cargarDocumento(nuevoDocumento);
    }

    async obtenerDocumento(id: string): Promise<Documento> {
        return await this.repository.obtenerDocumento(id);
    }

    async allDocumentos(): Promise<Documento[]> {
        return await this.repository.allDocumentos();
    }

    async deleteDocumento(id: string): Promise<void> {
        return await this.repository.deleteDocumento(id);
    }
    
}