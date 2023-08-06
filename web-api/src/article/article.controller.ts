import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { JwtGuard, RolesGuard } from 'src/auth/guard';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto';

@Roles(Role.ADMIN)
@UseGuards(JwtGuard, RolesGuard)
@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post()
  createArticle(@GetUser('id') userId: number, @Body() dto: CreateArticleDto) {
    return this.articleService.createArticle(userId, dto);
  }
}
