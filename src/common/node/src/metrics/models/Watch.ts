import { Client } from '@elastic/elasticsearch';
import { Model, Field } from './Model';
import { WatchSchema as Schema } from '../schema/Watch';

/**
 * Allows to manage Watch index in elasticsearch database
 * @class
 * @classdesc Manages watch index in elasticsearch
 */
export class Watch extends Model {
  static fieldsToSearch: Field[] = [];
  static itemType = '09';

  constructor(client: Client) {
    super(client);
    this.index = 'watch';
    this.schema = Schema;
  }
}
