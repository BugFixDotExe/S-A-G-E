import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false, // Use headful mode to simulate a real browser
    defaultViewport: null,
    args: ['--start-maximized'],
  });

  // Open a new page
  const page = await browser.newPage();

  // Navigate to Google Jobs search
  await page.goto('https://www.google.com');

  // Type in the search box
  await page.type('textarea[name="q"]', 'Full stack Software Engineering Remote Jobs', { delay: 100 });

  // Press Enter to submit the search form
  await page.keyboard.press('Enter');

  // Wait for the search results page to load
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
    // Step 7: Scroll the page down
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 20; // Scroll by 100px increments
        const timer = setInterval(() => {
          window.scrollBy(0, distance);
          totalHeight += distance;
  
          if (totalHeight >= 400) {
            clearInterval(timer);
            resolve();
          }
        }, 100); // Adjust the interval (e.g., 100ms) to control scroll speed
      });
    });
    await page.locator('a.jRKCUd').click()
  // Wait for the job listings to load (using the selector for the job links)
  await page.waitForSelector('a.MQUd2b');


   // Wait for the search results page to load
   await page.waitForNavigation({ waitUntil: 'networkidle2' });
   // Step 7: Scroll the page down
   await page.evaluate(async () => {
     await new Promise((resolve) => {
       let totalHeight = 0;
       const distance = 20; // Scroll by 100px increments
       const timer = setInterval(() => {
         window.scrollBy(0, distance);
         totalHeight += distance;
 
         if (totalHeight >= document.body.scrollHeight) {
           clearInterval(timer);
           resolve();
         }
       }, 100); // Adjust the interval (e.g., 100ms) to control scroll speed
     });
   });
  // Get the job listing links
  const jobLinks = await page.$$('a.MQUd2b');

  // Loop through each job link, click on it, and take a screenshot
  for (let i = 0; i < jobLinks.length; i++) {
    console.log(`Processing job ${i + 1} of ${jobLinks.length}`);

    // Click on the job listing
    await jobLinks[i].click();

    // Wait for the job details view to load (assuming "c-wiz" or similar appears)
    await page.waitForSelector('div.A8mJGd NDuZHe');
    

 
    
    await page.keyboard.press('ArrowDown');
    await page.waitForSelector('div.nNzjpf-cS4Vcb-PvZLI-QaAxMd-haAclf')
    await page.click('div.nNzjpf-cS4Vcb-PvZLI-QaAxMd-haAclf')

    // Take a screenshot of the container after each scroll
    await page.waitForSelector('c-wiz');
    await page.screenshot({ path: `job_${i}.png`, fullPage: true });
    await page.keyboard.press('ArrowDown');
    await page.screenshot({ path: `job_${i}.png`, fullPage: true });
    await page.keyboard.press('ArrowDown');
    await page.screenshot({ path: `job_${i}.png`, fullPage: true });
    await page.keyboard.press('ArrowDown');
    await page.screenshot({ path: `job_${i}.png`, fullPage: true });
    
    // Wait for a second before moving to the next job
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Re-fetch the job listing links after each iteration (to avoid stale elements)
    await page.waitForSelector('a.MQUd2b'); // Ensure the job links are visible again
    const newJobLinks = await page.$$('a.MQUd2b'); // Update the list of job links

    // Check if there are still jobs left to click
    if (i >= newJobLinks.length - 1) {
      break; // Exit if no more jobs
    }
  }

  // Close the browser after processing all jobs
  await browser.close();
})();
