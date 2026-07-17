const { test, expect } = require('@playwright/test');

test.describe('Login', () => {

    test.describe('Successful login', () => {
        test('logs in with valid credentials', async ({ page }) => {
            await page.goto('https://the-internet.herokuapp.com/login');
            await page.fill('#username', 'tomsmith');
            await page.fill('#password', 'SuperSecretPassword!');
            await page.click('button[type="submit"]');
            await expect(page.locator('#flash')).toContainText('You logged into a secure area');
        });
    });

      test.describe('Failed login', () => {

    test('shows an error with an incorrect username', async ({ page }) => {
      await page.goto('https://the-internet.herokuapp.com/login');
      await page.fill('#username', 'wronguser');
      await page.fill('#password', 'SuperSecretPassword!');
      await page.click('button[type="submit"]');
      await expect(page.locator('#flash')).toContainText('Your username is invalid');
    });

    test('shows an error with an incorrect password', async ({ page }) => {
      await page.goto('https://the-internet.herokuapp.com/login');
      await page.fill('#username', 'tomsmith');
      await page.fill('#password', 'wrongpassword');
      await page.click('button[type="submit"]');
      await expect(page.locator('#flash')).toContainText('Your password is invalid');
    });

    test('shows an error when both fields are blank', async ({ page }) => {
      await page.goto('https://the-internet.herokuapp.com/login');
      await page.click('button[type="submit"]');
      await expect(page.locator('#flash')).toContainText('Your username is invalid');
    });

     test('shows an error with valid username but blank password', async ({ page }) => {
      await page.goto('https://the-internet.herokuapp.com/login');
      await page.fill('#username', 'tomsmith');
      await page.click('button[type="submit"]');
      await expect(page.locator('#flash')).toContainText('Your password is invalid');
    });

    test('rejects username with leading whitespace', async ({ page }) => {
      await page.goto('https://the-internet.herokuapp.com/login');
      await page.fill('#username', ' tomsmith');
      await page.fill('#password', 'SuperSecretPassword!');
      await page.click('button[type="submit"]');
      await expect(page.locator('#flash')).toContainText('Your username is invalid');
    });

  });

    });

