import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3001/', { waitUntil: 'networkidle', timeout: 25000 });
await page.waitForTimeout(2000);
await page.screenshot({ path: '/tmp/shots/v2-full2.png', fullPage: true });
console.log('done');
await browser.close();
