import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Book as BookModel } from './schema/book.schema';
import { BookService } from './book.service';
import { AddBookDto } from './dto/AddBookDto';

@Resolver(() => BookModel)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}
  //Queries and mutations

  @Query(() => [BookModel], { name: 'books' })
  getAllBook(): any {
    return this.bookService.findAllBooks();
  }

  @Query(() => BookModel, { name: 'bookById', nullable: true })
  getBookById(
    @Args({ name: 'bookid', type: () => Int }) id: number,
  ): BookModel {
    return this.bookService.findBookById(id);
  }

  @Mutation(() => String, {name: "delete", nullable: true})
  deleteBookById(@Args({name: "bookId", type: () => Int}) id: number):
  string {
    return this.bookService.deleteBook(id);
  }

  @Mutation(() => String, {name: "AddBook"})
  addBook(@Args("addBookDto") addBookDto: AddBookDto):
  string {
    return this.bookService.addBook(addBookDto);
  }

  @Mutation(() => String, {name: "UpdateBook"})
  updateBook(@Args('UpdateBookDto') updateBookDto: AddBookDto, @Args({name: "bookId", type: () => Int}) id: number):
  string {
    return this.bookService.addBook(updateBookDto);
  }

}
