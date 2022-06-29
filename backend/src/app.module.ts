import { Module } from '@nestjs/common';
import { databaseProvider } from './database/database.provider';
import { AuthController } from './domains/auth/auth.controller';
import { TasksController } from './domains/tasks/tasks.controller';
import { UsersController } from './domains/users/users.controller';

@Module({
  imports: [],
  controllers: [TasksController, UsersController, AuthController],
  providers: [databaseProvider],
})
export class AppModule {}
