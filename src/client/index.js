const puppeteer = require('puppeteer');

async function get_session(email, password) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox"
            ]
        });
        const page = await browser.newPage();

        await page.goto("https://www.ag-spiel.de/index.php?section=login");
        await page.type("input[name=email", email);
        await page.type("input[name=userpass]", password);
        await page.click("input[type=checkbox]");

        await Promise.all([
            page.click("#login"),
            page.waitForNavigation()
        ]);

        let bodyHTML = await page.evaluate(() => document.body.innerHTML);

        if (bodyHTML.includes("Es gibt keinen Benutzer mit dieser E-Mail!")) {
            await browser.close();
            throw new Error("Es gibt keinen Benutzer mit dieser E-Mail!");
        } else if(bodyHTML.includes("Das Passwort ist nicht korrekt!")) {
            await browser.close();
            throw new Error("Das Passwort ist nicht korrekt!");
        } else if(bodyHTML.includes("Du bist eingeloggt mit ")) {
            console.log("Du bist eingeloggt mit: " + email);
            let cookieList = await page.cookies();
            cookieList = cookieList.map((cookie) => {return cookie;});
            const agsCookie = (await Promise.all(cookieList)).filter((cookie) => {
                if (cookie.name == "ag-spiel") {
                    return cookie;
                }
            });
            await browser.close();
            return agsCookie;
        } else {
            await browser.close();
            throw new Error("Unbekannter Fehler!")
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = get_session;