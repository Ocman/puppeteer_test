const puppeteer = require('puppeteer');

(async function(){
  // Открываем браузер
  const browser = await puppeteer.launch({ headless: false }); 
  const page = await browser.newPage();

  // Открыть браузер размером viewPort 1800 на 900
  await page.setViewport({ width: 1800, height: 900 });

  // Перейти на сайт google.com
  await page.goto('https://www.google.com');

  // В поиске ввести текст “qa engineering” 
  await page.type('[type="search"]', 'qa engineering');

  // Кликнуть по кнопке “Поиск в Google”
  await page.click('center:nth-child(1)>[type="submit"]:nth-child(1)'); 

  // Ждем, чтобы страница успела загрузиться
  await page.waitForTimeout(2000);

  // Сделать скриншот открывшейся страницы
  await page.screenshot({ path: 'screenshot.png' });

  // Закрываем браузер
  await browser.close();
})();

