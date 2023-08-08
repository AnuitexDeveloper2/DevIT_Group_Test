import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { Roles } from '../auth/decorator/roles.decorator';
import { JwtGuard, RolesGuard } from '../auth/guard';
import { ArticleService } from './article.service';
import { CreateArticleDto, EditArticleDto } from './dto';
import { GetArticlesDto } from './dto/get-articles.dto';

@Roles(Role.ADMIN)
@UseGuards(JwtGuard, RolesGuard)
@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post()
  createArticle(@GetUser('id') userId: number, @Body() dto: CreateArticleDto) {
    return this.articleService.createArticle(userId, dto);
  }

  @HttpCode(200)
  @Post('get')
  getArticles(@Body() dto: GetArticlesDto) {
    return this.articleService.getArticles(dto);
  }

  @Put(':id')
  editArticleById(
    @Param('id', ParseIntPipe) articleId: number,
    @Body() dto: EditArticleDto,
  ) {
    return this.articleService.editArticleById(articleId, dto);
  }

  @Delete(':id')
  removeArticleById(@Param('id', ParseIntPipe) articleId: number) {
    return this.articleService.deleteArticleById(articleId);
  }
}
