
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookDto {
    id: number;
    title: string;
    price: number;
}

export interface Book {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    index(): string | Promise<string>;
    books(): Book[] | Promise<Book[]>;
    bookById(bookid: number): Nullable<Book> | Promise<Nullable<Book>>;
}

export interface IMutation {
    delete(bookId: number): Nullable<string> | Promise<Nullable<string>>;
    AddBook(addBookDto: AddBookDto): string | Promise<string>;
    UpdateBook(UpdateBookDto: AddBookDto, bookId: number): string | Promise<string>;
}

type Nullable<T> = T | null;
