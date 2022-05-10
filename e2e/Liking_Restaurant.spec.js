const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.lists');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.lists');

  I.amOnPage('/');

  I.seeElement('.list-item a');

  const firstRestaurant = locate('.list-resto-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.list-item');

  const likedRestaurantTitle = await I.grabTextFrom('.list-resto-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
