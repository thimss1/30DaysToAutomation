
import { expect } from '@playwright/test'

export default class LoginPage {

constructor(page) {
this.page = page;


// define email locator
this.emailInput = this.page.locator("//input[@name='email']");

// define password locator
this.passwordInput = this.page.locator("//input[@name='password']");

// define login button locator
this.loginBtn = this.page.locator("//button[normalize-space()='Login']");

}



async goto() {

await this.page.goto('https://mini-bank.testamplify.com/login');
}

async login(email, password) {

// fill email field
await this.emailInput.fill(email);

// fill in password
await this.passwordInput.fill(password);

// click login button
await this.loginBtn.click();

}

}