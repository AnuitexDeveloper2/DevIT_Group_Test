import { Body, Controller, Post } from '@nestjs/common';
import { ArticlePublicService } from './article-public.service';
import { GetPublicArticlesDto } from './dto/get-public-article.dto';

@Controller('article-public')
export class ArticlePublicController {
  constructor(private articleService: ArticlePublicService) {}

  @Post()
  getPublicArticles(@Body() dto: GetPublicArticlesDto) {
    return this.articleService.getArticles(dto);
  }
}
