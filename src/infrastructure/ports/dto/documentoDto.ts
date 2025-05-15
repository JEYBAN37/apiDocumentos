import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class DocumentoDto {

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  contenido: string;

  @IsOptional()
  descricao: string;
}