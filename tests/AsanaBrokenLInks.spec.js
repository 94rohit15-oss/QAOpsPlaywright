import { test } from '@playwright/test';

test('Find all broken links', async ({ page }) => {
  const url = 'https://asana.com/confirm'; // 🔁 change this to your website
  await page.goto(url);

  // Get all anchor hrefs
  const links = await page.$$eval('a', anchors =>
    anchors.map(a => a.href).filter(href => href && href.startsWith('http'))
  );

  console.log(`Total links found: ${links.length}`);

  for (const link of links) {
    try {
      const response = await fetch(link, { method: 'HEAD' });
      if (response.status >= 400) {
        console.log(`❌ Broken link: ${link} -> ${response.status}`);
      }
    } catch (error) {
      console.log(`⚠️ Error checking link: ${link}`);
    }
  }
});
