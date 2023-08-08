import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { CronService } from './cron.service';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService, CronService],
})
export class ArticleModule {}
