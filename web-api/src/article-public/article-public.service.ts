import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GetPublicArticlesDto } from './dto/get-public-article.dto';

@Injectable()
export class ArticlePublicService {
  constructor(private prisma: PrismaService) {}

  async getArticles(dto: GetPublicArticlesDto) {
    const skip = dto.perPage * dto.page - dto.perPage;
    const query = {
      take: parseInt(dto.perPage.toString()),
      skip: skip,
      where: {},
      orderBy: {},
    };

    if (dto.searchString) {
      query.where = {
        title: { contains: dto.searchString, mode: 'insensitive' },
      };
    }
    if (dto.sortDirection) {
      query.orderBy = {
        title: dto.sortDirection,
      };
    }

    const result = await this.prisma.$transaction([
      this.prisma.article.count({
        where: {
          title: { contains: dto.searchString.toString(), mode: 'insensitive' },
        },
      }),
      this.prisma.article.findMany(query),
    ]);
    const [total, data] = result;
    return { total, data };
  }
}
