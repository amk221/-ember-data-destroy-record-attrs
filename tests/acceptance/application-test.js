import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'example/tests/helpers';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    await click('button');

    assert.dom('.js-message').includesText('You deleted Foo last name');
  });
});
