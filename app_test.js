// const { Builder, By, until } = require("selenium-webdriver");

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// (async function testFrontend() {
//   let driver = await new Builder().forBrowser("chrome").build();

//   try {
//     await driver.get("http://localhost:3000/");
//     await sleep(1000);

//     await driver.findElement(By.id("registerButton")).click();
//     await sleep(1000);

//     await driver.findElement(By.id("name")).sendKeys("test user");
//     await sleep(1000);

//     await driver.findElement(By.id("username")).sendKeys("testuser111");
//     await sleep(1000);

//     await driver.findElement(By.id("mobile_number")).sendKeys("1992919111");
//     await sleep(1000);

//     await driver.findElement(By.id("email")).sendKeys("testuser111@eample.com");
//     await sleep(1000);

//     await driver.findElement(By.id("password")).sendKeys("password1121");
//     await sleep(4000);

//     await driver.findElement(By.id("register")).click();
//     await sleep(1000);

//     console.log("Test completed successfully!");
//   } catch (error) {
//     console.error("An error occurred:", error);
//   } finally {
//     // await driver.quit(); // Always quit the driver to close the browser
//   }
// })();


const { Builder, By, Key, until } = require("selenium-webdriver");

(async function studyNexRegistrationTest() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000/register");
    await driver.manage().window().maximize();

    await driver.findElement(By.id("name")).sendKeys("John Teacher");
    await driver.findElement(By.id("mobile_number")).sendKeys("9876543210");
    await driver
      .findElement(By.id("email"))
      .sendKeys("john.teacher@example.com");
    await driver.findElement(By.id("username")).sendKeys("johnteacher");
    await driver.findElement(By.id("password")).sendKeys("SecurePass@123");

    await driver.findElement(By.id("register")).click();
    await driver.wait(until.urlContains("/create-join"), 10000);

    const createOrgBtn = await driver.findElement(By.id("createOrgButton"));
    await driver.wait(until.elementIsVisible(createOrgBtn), 10000);
    await createOrgBtn.click();

    const popupVisible = await driver.wait(
      until.elementLocated(
        By.xpath("//div[contains(text(),'Create Organization')]")
      ),
      10000
    );
    if (popupVisible) {
      console.log(
        "✅ Test Passed: Registration and create organization flow successful"
      );
    } else {
      console.log("❌ Test Failed: Create Organization popup not displayed");
    }
  } catch (err) {
    console.error("❌ Test Failed:", err);
  } finally {
    await driver.quit();
  }
})();
