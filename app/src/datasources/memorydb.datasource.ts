import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './memorydb.datasource.json';

export class MemorydbDataSource extends juggler.DataSource {
  static dataSourceName = 'memorydb';

  constructor(
    @inject('datasources.config.memorydb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
