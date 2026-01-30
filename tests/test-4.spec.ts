import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.slow()
  await page.goto('https://www.magicbricks.com/');
  await page.locator('#keyword_autoSuggestSelectedDiv').getByText('Bangalore', { exact: true }).click();
  await page.locator('.mb-search__tag-close').click();
  await page.getByPlaceholder('Enter City, Locality, Project').type('Hyderabad');
  await page.locator('div').filter({ hasText: /^hyderabad$/ }).click();
  await page.getByText('Flat +').click();
  await page.locator('[id="10002_10003_10021_10022"]').click();
  await page.getByText('2 Bhk', { exact: true }).click();
  await page.getByText('5 Bhk').click();
  await page.getByText('3 Bhk', { exact: true }).click();
  await page.getByText('+ Bhk').click();
  await page.getByText('4 Bhk').click();
  await page.getByText('3 Bhk', { exact: true }).click();
  await page.locator('.mb-search__budget > .mb-search__title').click();
  await page.locator('#minBudjet').getByText('₹4.5 Cr').click();
  await page.locator('#maxBhkIndex_24').click();
  await page.getByText('Search', { exact: true }).click();
});