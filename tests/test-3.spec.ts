import { test, expect } from '@playwright/test';

test('MBR', async ({ page }) => {
  await page.goto('https://www.magicbricks.com/property-for-sale-rent-in-Bangalore/residential-real-estate-Bangalore');
  
  // await page.getByRole('textbox', { name: 'Enter City, Locality, Project' }).fill('Benga');
  await page.locator('#keyword_autoSuggestSelectedDiv').getByText('Bangalore', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter City, Locality, Project' }).click();
  await page.locator('.mb-search__tag-close').click();
  await page.getByRole('textbox', { name: 'Enter City, Locality, Project' }).fill('Hyderabad');
  await page.getByRole('textbox', { name: 'Enter City, Locality, Project' }).press('Enter');
  await page.locator('div').filter({ hasText: /^bengaluru$/ }).click();
  await page.getByText('Flat +').click();
  await page.getByText('House/Villa').click();
  await page.getByText('2 Bhk', { exact: true }).click();
  await page.locator('#rent_budget_lbl').click();
  await page.locator('#minBudjet').getByText('₹50 Lac').click();
  await page.locator('#maxBhkIndex_9').click();
  await page.getByText('Search', { exact: true }).click();
});