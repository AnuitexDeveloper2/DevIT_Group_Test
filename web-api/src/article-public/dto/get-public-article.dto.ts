import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class GetPublicArticlesDto {
  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  page: number;

  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  perPage: number;

  @IsString()
  @IsOptional()
  searchString?: string;

  @IsString()
  @IsOptional()
  sortField?: string;

  @IsString()
  @IsOptional()
  sortDirection?: string;
}
