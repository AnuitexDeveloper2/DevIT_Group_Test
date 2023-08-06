import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EditArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string;
}
