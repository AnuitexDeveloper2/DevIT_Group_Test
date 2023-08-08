import { Module } from '@nestjs/common';
import { ArticlePublicController } from './article-public.controller';
import { ArticlePublicService } from './article-public.service';

@Module({
  controllers: [ArticlePublicController],
  providers: [ArticlePublicService],
})
export class ArticlePublicModule {}
