import { Module } from '@nestjs/common';
import { UserUsecase } from 'src/domain/usecase/user.usecase';
import { UserRepositoryImpl } from 'src/infrastructure/adapters/user.repository.impl';
import { UserController } from 'src/infrastructure/ports/controllers/user.controller';

export const userproviders = [
UserRepositoryImpl,
    {
      provide: UserUsecase,
      useFactory: (repo: UserRepositoryImpl) => new UserUsecase(repo),
      inject: [UserRepositoryImpl],
    },
]

@Module({
  imports: [],
  controllers: [UserController],
  providers: userproviders,
})
export class AppModule {}
