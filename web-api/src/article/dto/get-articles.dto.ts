import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class GetArticlesDto {
  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  page: number;

  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  perPage: number;
}
