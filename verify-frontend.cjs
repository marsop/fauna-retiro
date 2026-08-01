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

    // Clear state
    await page.evaluate(() => {
        localStorage.clear();
    });

    // Reload
    await page.goto('http://localhost:5173');
    await page.waitForLoadState('networkidle');

    // Ensure we are on Jaguar
    const animalName = await page.textContent('.text-3xl');
    if (!animalName || !animalName.includes('Jaguar')) {
        console.log("Expected to see Jaguar, but found:", animalName);
    }

    // Click "I Found It!"
    await page.click('button:has-text("I Found It!")');

    // Wait for the video to appear
    await page.waitForSelector('video', { state: 'visible' });

    // Take a screenshot of the intermediate screen showing the video
    await page.screenshot({ path: 'verification/screenshots/jaguar_found_video.png' });

    // Wait for 3 seconds to let video play for recording
    await page.waitForTimeout(3000);

    // Click "Continue"
    await page.click('button:has-text("Continue")');

    // Ensure we moved to the next animal
    await page.waitForTimeout(1000);
    const nextAnimalName = await page.textContent('.text-3xl');
    console.log("Moved to next animal:", nextAnimalName);

    // Take screenshot of next animal
    await page.screenshot({ path: 'verification/screenshots/next_animal.png' });

  } catch (error) {
    console.error('Verification failed:', error);
  } finally {
    const videoPath = await page.video().path();
    console.log(`Video saved to: ${videoPath}`);
    await context.close();
    await browser.close();
  }
})();
