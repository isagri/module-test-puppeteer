const timeout = 15000;

// test d'un raccourcisseur d'URL
describe("Shorten Customize", () => {
    let page;

    // vérification du chargement de la page d'accueil
    test('shorten customize', async () => {
        let longUrl = 'https://www.youtube.com/watch?v=azAEHCQgcUI';
        let name = Math.floor(Date.now()).toString();
        let shortUrl = 'http:\/\/polr\.alwaysdata\.net\/' + name;

        await page.goto('http://polr.alwaysdata.net');
        await page.waitForSelector('.long-link-input');
        await page.type('.long-link-input', longUrl);
//      button link options
        await page.waitForSelector('#show-link-options');
        await page.$eval( '#show-link-options', el => el.click() );
        await page.screenshot({path: './tests/img/shortenCustomize2.png'});
//      input link name
        await page.waitForSelector('.custom-url-field');
        await page.type('.custom-url-field', name);
        await page.screenshot({path: './tests/img/shortenCustomize1.png'});
//      button shorten
        await page.waitForSelector('#shorten');
        await page.$eval( '#shorten', el => el.click() );
        await page.waitForSelector('input.result-box');
        const val = await page.$eval('input.result-box', el => el.value);
        expect(val).toBe(shortUrl);
        await page.screenshot({path: './tests/img/shortenCustomize3.png'});
    }, timeout);


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
