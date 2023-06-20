import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  ParseIntPipe,
  Delete,
  Put,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticlesDto } from './dto/CreateArticles.dto';
import { UserDto } from '../users/dto/User.dto';
import { UpdatearticleDto } from './dto/UpdateArticle.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Post()
  createArticle(@Body() articlesData: CreateArticlesDto): void {
    return this.articleService.createArticles(articlesData);
  }

  @Get()
  getAllArticles() {
    return this.articleService.getAllArticles();
  }

  @Get(':id')
  getArticlesById(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.getArticlesById(id);
  }

  @Put(':id')
  updateArticleById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArticle: UpdatearticleDto,
  ) {
    return this.articleService.updateArticlesById(id, updateArticle);
  }

  @Delete(':id')
  deletearticleById(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.deleteArticlesById(id);
  }
}
