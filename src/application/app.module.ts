import { Module } from '@nestjs/common';
import { documnetoController } from 'src/infrastructure/ports/documento.controller';
import { documnetoUsecase } from 'src/domain/usecase/documentoUseCase';
import { DocumentoRepository } from 'src/domain/interface/documentoRepository';
import { DocumentoRepositoryImpl } from 'src/infrastructure/db/document.repository.impl';

@Module({
  imports: [],
  controllers: [documnetoController],
  providers: [
    {
      provide:documnetoUsecase,
      useFactory: (repo : DocumentoRepository) => new documnetoUsecase(repo),
      inject: [DocumentoRepositoryImpl],
    },
    DocumentoRepositoryImpl,
  ],
})
export class AppModule {}
