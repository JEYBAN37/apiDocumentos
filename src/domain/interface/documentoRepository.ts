import { Documento } from "../models/documento";

export interface DocumentoRepository {
  cargarDocumento(documento : Documento): Promise<Documento>;
  obtenerDocumento(id: string): Promise<Documento>;
  allDocumentos(): Promise<Documento[]>;
  deleteDocumento(id: string): Promise<void>;
}