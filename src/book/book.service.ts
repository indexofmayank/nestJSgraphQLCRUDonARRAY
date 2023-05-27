import {Injectable} from '@nestjs/common';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {
    public booksData: BookEntity[] = [];

    findAllBooks() : BookEntity[] {
        return this.booksData;
    }

}