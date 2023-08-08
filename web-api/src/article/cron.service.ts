import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { feedParser } from 'src/helper/parseLink';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto';

@Injectable()
export class CronService {
  constructor(
    private articleService: ArticleService,
    private prismaService: PrismaService,
  ) {}
  @Cron('* 1 * * * *')
  async findArticles() {
    const admin = await this.prismaService.user.findFirstOrThrow({
      where: {
        email: 'admin@gmail.com',
      },
    });
    const feeds = [
      'https://aws.amazon.com/blogs/developer/feed/',
      'https://aws.amazon.com/blogs/architecture/feed/',
      'https://aws.amazon.com/blogs/database/feed/',
      'https://aws.amazon.com/blogs/devops/feed/',
    ];
    for (let i = 0; i < feeds.length; i++) {
      const parsedResult = await feedParser(feeds[i]);
      for (let j = 0; j < parsedResult.items.length; j++) {
        const element = parsedResult.items[j];
        const dto: CreateArticleDto = {
          description: element.title,
          title: parsedResult.title,
          link: element.link,
          feedId: element.guid,
        };
        await this.articleService.createArticle(admin.id, dto);
      }
    }
  }
}
