import {Injectable} from '@nestjs/common';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {
    public booksData: BookEntity[] = [
        {id: 1, title: "Mayank", price: 100},
        {id: 2, title: "Tiwari", price: 200}
    ];

    findAllBooks() : BookEntity[] {
        return this.booksData;
    }

}