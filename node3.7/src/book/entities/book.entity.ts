import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  count: number;

  @Prop()
  description: string;

  @Prop()
  userId: string;

  @Prop([Number])
  rating: number[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
