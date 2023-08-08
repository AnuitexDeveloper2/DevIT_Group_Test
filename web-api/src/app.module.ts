import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './article/article.module';
import { ArticlePublicModule } from './article-public/article-public.module';

@Module({
  imports: [
    AuthModule,
    ArticleModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ArticlePublicModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
