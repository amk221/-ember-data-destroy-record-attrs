import Model, { attr } from '@ember-data/model';

export default class TrashModel extends Model {
  @attr firstName;
  @attr lastName;
}
