import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Damazon%26oq%3Damazon%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDQ0MzNqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3D1695aYzWEfyuseMP3IT9mAY&q=EhAkCUDyIXR68gwMfmTd8HubGNnf5ssGIjDNXYKnSFQ6T7IyUQfCwJc9Be0KBcQTjtk9-pXUeS6JtkiFb6fARrYi4vHYCOzWpkIyAVJaAUM');
});