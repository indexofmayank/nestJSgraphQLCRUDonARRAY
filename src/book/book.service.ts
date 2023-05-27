import {Injectable} from '@nestjs/common';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {
    public booksData: BookEntity[] = [];

    addBook(book: BookEntity): string {
        this.booksData.push(book);
        return "Book Added Successfully";
    }

    findAllBooks() : BookEntity[] {
        return this.booksData;
    }

    findBookById(id: number): BookEntity {
        for(let x = 0; x < this.booksData.length; x++) {
            if(this.booksData[x].id == id) {
                return this.booksData[x];
            }
        }
    }

    deleteBook(id: number) {
        this.booksData = this.booksData.filter((book) => book.id != id);
        return 'Book has been deleted';
    }

    updateBook(id: number, updateBook: BookEntity): string {
        for (let x = 0; x < this.booksData.length; x++) {
           if(this.booksData[x].id == id) {
            this.booksData[id] = updateBook;
           }
        }
        return 'Book updated Successfully';
    }



}