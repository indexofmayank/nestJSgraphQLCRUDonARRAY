import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import { join } from 'path';
import {AppResolver} from './app.resolver';
import { BookModule } from './book/book.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts')
      }
    }),
    BookModule
  ],
  providers: [AppResolver],
})
export class AppModule {}
