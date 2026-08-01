const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: {
      dir: 'verification/videos/',
      size: { width: 1280, height: 720 }
    }
  });
  const page = await context.newPage();

  try {
    await page.goto('http://localhost:5173');
    await page.waitForLoadState('networkidle');

    // Make sure we have the screenshots dir
    fs.mkdirSync('verification/screenshots', { recursive: true });

    // Initial state (should be German by default usually)
    await page.screenshot({ path: 'verification/screenshots/initial_lang.png' });

    const initialTitle = await page.textContent('h1');
    const toggleButtonText = await page.textContent('h1 + button');
    console.log("Initial Toggle Text:", toggleButtonText);

    // Click the toggle button (either EN or DE)
    await page.click('h1 + button');
    await page.waitForTimeout(500); // Give it a moment to update

    await page.screenshot({ path: 'verification/screenshots/toggled_lang.png' });

    const newToggleButtonText = await page.textContent('h1 + button');
    console.log("Toggled Text:", newToggleButtonText);

  } catch (error) {
    console.error('Verification failed:', error);
  } finally {
    const videoPath = await page.video().path();
    console.log(`Video saved to: ${videoPath}`);
    await context.close();
    await browser.close();
  }
})();
