import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto, UpdateBookRating } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}
  async create(createBookDto: CreateBookDto) {
    return await this.bookModel.create(createBookDto);
  }

  async findAll() {
    return await this.bookModel.find();
  }

  async findOne(id: string) {
    return await this.bookModel.findById(id);
  }

  async findByUserId(id: string) {
    return await this.bookModel.find({
        userId: id,
    });
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return this.bookModel.findByIdAndUpdate(id, updateBookDto);
  }

  async updaterating(id: string, updateBookRating: UpdateBookRating) {
    const { rating } = updateBookRating;
    if (rating.length) {
      const x = await this.bookModel.findById(id);
      if (x) {
        await this.bookModel.findByIdAndUpdate(id, updateBookRating);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  async remove(id: string) {
    return this.bookModel.findByIdAndDelete(id);
  }
}
