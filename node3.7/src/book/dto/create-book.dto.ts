import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  count: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  rating: number[];
}
