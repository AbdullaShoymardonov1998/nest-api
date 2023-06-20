import { BadRequestException, Injectable } from '@nestjs/common';
import { CategoryDto } from './dto/Category.dto';
import { CreateCategoryDto } from './dto/CreateCategory.dto';

@Injectable()
export class CategoriesService {
  private categories: CategoryDto[] = [];

  createCategories(categoryDetails: CreateCategoryDto) {
    this.categories.push({
      ...categoryDetails,
      id: this.categories.length + 1,
      createdAt: new Date(),
    });

    return {
      message: 'Created successfully',
    };
  }

  getAllCategories(): CategoryDto[] {
    return this.categories;
  }

  getCategoriesById(id: number) {
    const category: CategoryDto = this.categories.find(
      (item) => item.id === id,
    );
    if (!category) {
      throw new BadRequestException('not found');
    }
    return category;
  }

  deleteCategoryById(id: number) {
    this.getCategoriesById(id);
    this.categories = this.categories.filter((user) => user.id !== id);
    return this.categories;
  }
}
