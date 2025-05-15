import { Body, Controller, Delete, Get, HttpStatus, Post, Query, Res } from "@nestjs/common";
import { Documento } from "src/domain/models/documento";
import { DocumentoDto } from "src/infrastructure/ports/dto/documentoDto";
import { documnetoUsecase } from "src/domain/usecase/documentoUseCase";
import { Response } from 'express';

@Controller('api/v1')
export class documnetoController {
    constructor(private readonly documentoUsecase: documnetoUsecase) {}

    @Post('documento')
    async cargarDocumento(@Res() res: Response , @Body() documentoDto: DocumentoDto): Promise<Response> {
       const respuesta = await this.documentoUsecase.cargarDocumento(documentoDto);
        return res.status(HttpStatus.CREATED).send(respuesta);
    }

    @Get('documento/')
    async obtenerDocumento(@Query('id') id: string): Promise<Documento> {
        return await this.documentoUsecase.obtenerDocumento(id);
    }

    @Get('documento/all')
    async allDocumentos(@Res() res: Response): Promise<Response> {
        const documentos = await this.documentoUsecase.allDocumentos();
        return res.status(HttpStatus.OK).json(documentos);
    }

    @Delete('documento')
    async deleteDocumento(@Query('id') id: string): Promise<void> {
        return await this.documentoUsecase.deleteDocumento(id); ;
    }

}