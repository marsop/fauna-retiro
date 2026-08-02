const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to local dev server
    await page.goto('http://localhost:5173');

    // Wait for the app to load
    await page.waitForSelector('text="Fauna Quest"', { timeout: 10000 });

    // Clear localStorage to ensure we're at the initial state
    await page.evaluate(() => {
      localStorage.removeItem('fauna_quest_progress');
    });

    // Reload to apply the cleared local storage state
    await page.reload();

    // Check if the START SEARCH button and ready title are rendered
    await page.waitForSelector('text="START SEARCH"');
    await page.waitForSelector('text="Ready to find animals?"');
    console.log("Success: Initial page rendered correctly with START SEARCH button.");

    // Take a screenshot
    await page.screenshot({ path: 'verification/initial-page.png' });

    // Click the START SEARCH button
    await page.click('text="START SEARCH"');

    // Check if it navigates to the first target animal
    await page.waitForSelector('text="Current Target"');
    console.log("Success: Clicked START SEARCH and started the quest.");

    // Take a screenshot of the first target
    await page.screenshot({ path: 'verification/first-target.png' });

  } catch (error) {
    console.error("Test failed:", error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
