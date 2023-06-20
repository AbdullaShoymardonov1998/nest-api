import { BadRequestException, Injectable } from '@nestjs/common';
import { ArticlesDto } from './dto/Articles.dto';
import { UserService } from '../users/user.service';
import { CreateArticlesDto } from './dto/CreateArticles.dto';
import { UpdatearticleDto } from './dto/UpdateArticle.dto';

@Injectable()
export class ArticlesService {
  constructor(private readonly userService: UserService) {}
  private articles: ArticlesDto[] = [];
  createArticles(articlesData: CreateArticlesDto): void {
    // check user exists, category
    // this.userService.getUserById(userId)
    // category

    this.articles.push({
      ...articlesData,
      createdAt: new Date(),
      id: this.articles.length + 1,
    });
  }

  getAllArticles(): ArticlesDto[] {
    return this.articles;
  }

  getArticlesById(id: number) {
    const article: ArticlesDto = this.articles.find((item) => item.id === id);
    if (!article) {
      throw new BadRequestException('Article not found');
    }
    return article;
  }

  //Delete
  deleteArticlesById(id: number) {
    this.getArticlesById(id);
    this.articles = this.articles.filter((user) => user.id !== id);
    return this.articles;
  }

  //Update article by Id
  updateArticlesById(id: number, updateArticle: UpdatearticleDto) {
    for (let i = 0; i < this.articles.length; i++) {
      if (this.getArticlesById(id)) {
        this.articles[i].title = updateArticle.title;
        this.articles[i].body = updateArticle.body;
      }
      return {
        message: 'Updated',
      };
    }
  }
}
