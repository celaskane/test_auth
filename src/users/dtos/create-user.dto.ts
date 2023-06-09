import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegExHelper } from '../../helpers/regex.helper';
import { PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password, {
    message:
      'Password must have at least 8 characters containing upper case, lower case, number and special character',
  })
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
