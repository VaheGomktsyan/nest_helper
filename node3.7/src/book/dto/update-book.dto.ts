import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  count: number;
  @ApiProperty()
  description: string;
}

export class UpdateBookRating {
  @ApiProperty()
  rating: number[];
}
