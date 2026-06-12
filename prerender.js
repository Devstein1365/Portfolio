import puppeteer from "puppeteer";
import { preview } from "vite";
import fs from "fs";
import path from "path";

const routes = ["/", "/about", "/project", "/resume"];

async function prerender() {
  const previewServer = await preview({ preview: { port: 5005 } });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    await page.goto(`http://localhost:5005${route}`, {
      waitUntil: "networkidle0",
    });

    await new Promise((r) => setTimeout(r, 1000));

    const html = await page.content();
    const dir = route === "/" ? "dist" : `dist${route}`;
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html);
    console.log(`Successfully Prerendered ${route}`);
  }

  await browser.close();
  await previewServer.close();
}

prerender().catch(console.error);
