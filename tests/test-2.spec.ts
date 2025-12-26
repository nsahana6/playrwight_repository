import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('tops');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('button', { name: 'tops tunics for women' }).click();
  await page.locator('.a-section.a-spacing-none._c2Itd_itemInfo_1g6UG > .a-link-normal._c2Itd_link_pJ4S_').first().click();
  await page.goto('https://www.amazon.in/gp/aw/d/B0CV9VW2TC/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=d9ebd1950b0fea7a3ea99755d9a00a5b&hsa_cr_id=0&qid=1766399631&sr=1-1-e0fa1fdd-d857-4087-adda-5bd576b25987&aref=U2rdsnwgz5&ref_=sbx_s_sparkle_sbtcd_asin_0_bkgd&pd_rd_w=qrogl&content-id=amzn1.sym.6dfd6df7-44a2-4792-8c83-3ac8a4ba533a%3Aamzn1.sym.6dfd6df7-44a2-4792-8c83-3ac8a4ba533a&pf_rd_p=6dfd6df7-44a2-4792-8c83-3ac8a4ba533a&pf_rd_r=DMK90G0KGMQKWKKC15QM&pd_rd_wg=wNn67&pd_rd_r=46f86445-d561-4bc6-847a-a3a75d3eb8de&th=1&psc=1');
  await page.goto('https://www.amazon.in/gp/aw/d/B0CV9VW2TC/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=d9ebd1950b0fea7a3ea99755d9a00a5b&hsa_cr_id=0&qid=1766399631&sr=1-1-e0fa1fdd-d857-4087-adda-5bd576b25987&aref=U2rdsnwgz5&ref_=sbx_s_sparkle_sbtcd_asin_0_bkgd&pd_rd_w=qrogl&content-id=amzn1.sym.6dfd6df7-44a2-4792-8c83-3ac8a4ba533a%3Aamzn1.sym.6dfd6df7-44a2-4792-8c83-3ac8a4ba533a&pf_rd_p=6dfd6df7-44a2-4792-8c83-3ac8a4ba533a&pf_rd_r=DMK90G0KGMQKWKKC15QM&pd_rd_wg=wNn67&pd_rd_r=46f86445-d561-4bc6-847a-a3a75d3eb8de&th=1&psc=1');
});