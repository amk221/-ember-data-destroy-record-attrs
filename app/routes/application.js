import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    pushPayload(this.store, 'foo', {
      foo: {
        id: 1,
        firstName: 'Foo first name',
        lastName: 'Foo last name',
      },
    });

    return this.store.peekRecord('foo', 1);
  }
}

function pushPayload(store, modelName, rawPayload) {
  const ModelClass = store.modelFor(modelName);
  const serializer = store.serializerFor(modelName);
  const jsonApiPayload = serializer.normalizeResponse(
    store,
    ModelClass,
    rawPayload,
    null,
    'query'
  );

  return store.push(jsonApiPayload);
}
