import { HttpException, HttpStatus } from '@nestjs/common';
import * as Parser from 'rss-parser';

export const feedParser = async (link: string) => {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(link);
    return feed;
  } catch (error) {
    throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
  }
};
