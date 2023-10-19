import type { Book } from '@prisma/client'
import { Controller, Delete, Param } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { BookService } from './book.service'
import { BookRetrieveAllDto, CreateBookDto } from './dtos'

@Controller()
export class BookController {
  //book-service-readonly
  readonly #_service: BookService
  //book-service-controller
  constructor(service: BookService) {
    this.#_service = service
  }
  //reatrieve-book
  @MessagePattern('cmd:book-retrieve')
  retrieveProductAll(@Payload() payload: BookRetrieveAllDto): Promise<Book[]> {
    return this.#_service.retrieveBookAll(payload)
  }
  //create-book
  @MessagePattern('cmd:book-create')
  createProduct(@Payload() payload: CreateBookDto): Promise<null> {
    return this.#_service.createBook(payload)
  }
  //delete-book
  @MessagePattern('cmd:book-delete')
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Book | null> {
    return this.#_service.deleteBook(String(id))
  }
}
