import { Module } from '@nestjs/common';
import { UseCaseTask } from 'src/dominio/usecase/usecase.task';
import { TaskRepositoryImpl } from 'src/infrastructure/adapter/task.repository.impl';
import { TaskController } from 'src/infrastructure/ports/task.controller';

export const providersModules = [
    TaskRepositoryImpl,
    {
      provide: UseCaseTask,
      useFactory: (repo: TaskRepositoryImpl) => new UseCaseTask(repo),
      inject: [TaskRepositoryImpl],
    },
];


@Module({
  imports: [],
  controllers: [TaskController],
  providers: providersModules,
})
export class AppModule {}

