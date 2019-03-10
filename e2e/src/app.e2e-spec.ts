import { AppPage } from './app.po';
import { see, slow, go, click, below } from 'blue-harvest';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(async () => {
    await go('/');
  });

  it('should work with blue-harvest', async() => {
    await slow.see('Welcome to blue-harvest-dropdown!');
  });

  it('should see dropdown', async() => {
    await click('Favorite food');
    await click('Pizza');
    await see('Pizza');
  });
});

