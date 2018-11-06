import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Todo} from '../models';
import {MemorydbDataSource} from '../datasources';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id
> {
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource) {
    super(Todo, dataSource);
  }
}
