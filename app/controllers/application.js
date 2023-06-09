import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked message;

  @action
  async del(model) {
    // Uncomment this to make the test pass!
    // console.log(model.lastName);

    await model.destroyRecord();

    this.message = `You deleted ${model.lastName}`;
  }
}
