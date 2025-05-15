import { Injectable } from "@nestjs/common";
import { DocumentoRepository } from "src/domain/interface/documentoRepository";
import { Documento } from "src/domain/models/documento";

@Injectable()
export class DocumentoRepositoryImpl implements DocumentoRepository {

  private readonly documentos: Documento[] = [];

  async cargarDocumento(documento: Documento): Promise<Documento> {
    this.documentos.push(documento);
    return documento;
  }

  async obtenerDocumento(id: string): Promise<Documento> {
    const documento = this.documentos.find(doc => doc.id === id);
    if (!documento) {
      throw new Error(`Documento with id ${id} not found`);
    }
    return documento;
  }

  async allDocumentos () : Promise<Documento[]>{
    return this.documentos;
  }

  async deleteDocumento(id: string): Promise<void> {
    const index = this.documentos.findIndex(doc => doc.id === id);
    if (index === -1) {
      throw new Error(`Documento with id ${id} not found`);
    }
    this.documentos.splice(index, 1);
  }

}

