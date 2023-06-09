import RESTAdapter from '@ember-data/adapter/rest';

export default class FooAdapter extends RESTAdapter {
  ajax() {
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }
}
