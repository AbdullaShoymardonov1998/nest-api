import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ArticlesModule } from './modules/articles/articles.module';

@Module({
  imports: [UserModule, CategoriesModule, ArticlesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
