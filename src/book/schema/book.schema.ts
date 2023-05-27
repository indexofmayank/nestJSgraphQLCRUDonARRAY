import {ObjectType, Field, Int} from '@nestjs/graphql';

@ObjectType()
export class Book {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;

    @Field()
    price: number;
}