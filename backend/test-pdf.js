const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent("<h1>Hello, world!</h1>");
  await page.pdf({ path: "TicketGenerated/test.pdf", format: "A4" });
  await browser.close();
  console.log("✅ PDF généré avec succès : test.pdf");
})();
