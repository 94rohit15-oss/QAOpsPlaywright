const {test} = require('@playwright/test');


test.only('Project', async ({ page, context }) => {
  await page.goto('https://asana.com/confirm');

  // Get all href attributes from <a> tags
  const links = []; // Empty array variable 
  links = await page.$$eval('a', anchors =>   // links-> variable and Array data type 
    anchors
      .map(a => a.href) //map anchor to href
      .filter(href => href && href.startsWith('http')) // filter all href with http
  );

  console.log(`Total links found: ${links.length}`);

  const brokenLinks = [];// Empty array variable 

  for (const link of links) {
    try {
      const response = await page.request.get(link);  //call link
      const status = response.status(); // what ever status will come it stroe in 'status' const variable in number form

      if (status >= 400) {
        console.log(`Broken link: ${link} (Status: ${status})`);  //log status for broken links
        brokenLinks.push({ link, status }); // const varaiable that willl store array of object
      } else {
        console.log(`Working link: ${link} (Status: ${status})`); // working link if status passed and logs the status
      }
    } catch (err) {
      console.log(`Error accessing: ${link} (${err.message})`);
      brokenLinks.push({ link, status: 'Error' });
    }
  }

  console.log(`\nBroken Links Summary (${brokenLinks.length}):`); // Array lenght of broken links
  brokenLinks.forEach(l => console.log(`- ${l.link} [${l.status}]`)); //log the broken links

  await browser.close();

});


