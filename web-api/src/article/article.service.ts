import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArticleDto, EditArticleDto } from './dto';
import { GetArticlesDto } from './dto/get-articles.dto';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async createArticle(userId: number, dto: CreateArticleDto) {
    if (dto.feedId) {
      const existedArticle = await this.prisma.article.findFirst({
        where: {
          feedId: dto.feedId,
        },
      });
      if (existedArticle) {
        return {};
      }
    }

    const article = await this.prisma.article.create({
      data: {
        user: { connect: { id: userId } },
        ...dto,
      },
    });

    return article;
  }

  async getArticles(dto: GetArticlesDto) {
    const skip = dto.perPage * dto.page - dto.perPage;
    const result = await this.prisma.$transaction([
      this.prisma.article.count(),
      this.prisma.article.findMany({
        take: parseInt(dto.perPage.toString()),
        skip: skip,
      }),
    ]);
    const [total, data] = result;
    return { total, data };
  }

  async editArticleById(articleId: number, dto: EditArticleDto) {
    const article = await this.prisma.article.findUnique({
      where: {
        id: articleId,
      },
    });

    if (!article) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    return await this.prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteArticleById(articleId: number) {
    const article = await this.prisma.article.findUnique({
      where: {
        id: articleId,
      },
    });

    if (!article) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    return await this.prisma.article.delete({
      where: {
        id: articleId,
      },
    });
  }
}
