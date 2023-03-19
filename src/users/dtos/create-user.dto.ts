import { IsEmail, IsString } from 'class-validator/types/decorator/decorators';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
