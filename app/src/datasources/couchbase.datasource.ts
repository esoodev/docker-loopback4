import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './couchbase.datasource.json';

export class CouchbaseDataSource extends juggler.DataSource {
  static dataSourceName = 'couchbase';

  constructor(
    @inject('datasources.config.couchbase', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
