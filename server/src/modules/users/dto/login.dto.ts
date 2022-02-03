import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: '用户名',
    example: 'admin',
    type: String,
  })
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string;

  @ApiProperty({
    description: '密码',
    example: '123456',
    type: String
  })
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}
