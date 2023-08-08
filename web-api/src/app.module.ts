import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
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
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
