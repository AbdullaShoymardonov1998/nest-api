import {
  Post,
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/CreateCategory.dto';
import { CategoryDto } from './dto/Category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}
  @Post()
  createCategories(@Body() categoryData: CreateCategoryDto): {
    message: string;
  } {
    return this.categoryService.createCategories(categoryData);
  }

  @Get()
  getAllCategories(): CategoryDto[] {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  getCategoriesById(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.getCategoriesById(id);
  }

  @Delete(':id')
  deleteUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.deleteCategoryById(id);
  }
}
