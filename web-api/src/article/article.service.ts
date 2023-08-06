import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArticleDto } from './dto';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async createArticle(userId: number, dto: CreateArticleDto) {
    const article = await this.prisma.article.create({
      data: {
        user: { connect: { id: userId } },
        ...dto,
      },
    });

    return article;
  }
}
