import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { UserService } from '../users/user.service';

@Module({
  providers: [ArticlesService, UserService],
  controllers: [ArticlesController]
})
export class ArticlesModule {}
