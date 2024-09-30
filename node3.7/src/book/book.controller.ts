import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import e, { Response } from 'express';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto, UpdateBookRating } from './dto/update-book.dto';

@ApiTags('Book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const data = await this.bookService.findAll();
      return res.status(HttpStatus.OK).json(data);
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json(e);
    }
  }

  @Get(':id')
  async findOne(@Res() res: Response, @Param("id") id :string) {
    try {
      const data = await this.bookService.findOne(id);
      return res.status(HttpStatus.OK).json(data);
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).json(e)
    }
  }

  @Get('findByUserId/:id')
  findByUserId(@Param('id') id: string) {
    return this.bookService.findByUserId(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }

  @Patch('rating/:id')
  updaterating(
    @Param('id') id: string,
    @Body() updateBookRating: UpdateBookRating,
  ) {
    return this.bookService.updaterating(id, updateBookRating);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
