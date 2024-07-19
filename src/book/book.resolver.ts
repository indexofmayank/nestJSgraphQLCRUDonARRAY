import { Resolver, Query, } from '@nestjs/graphql';
import { Book as BookModel } from './schema/book.schema';
import { BookService } from './book.service';

@Resolver(() => BookModel)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}
  //Queries and mutations

  @Query(() => [BookModel], { name: 'books' })
  getAllBook(): any {
    return this.bookService.findAllBooks();
  }

}
