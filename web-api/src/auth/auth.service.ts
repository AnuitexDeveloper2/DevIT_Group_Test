import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  async login(dto: AuthDto) {
    return { ...dto, test: 'test' };
  }

  async signUp(dto: AuthDto) {
    return dto;
  }
}
