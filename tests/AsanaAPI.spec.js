const { test, expect, request } = require('@playwright/test');

const loginPayLoad = {
  userEmail: "94rohit15@gmail.com",
  userPassword: "Rohit007@"
};

const orderPayLoad = {
  orders: [
    {
      country: "India",
      productOrderedId: "6960eac0c941646b7a8b3e68"
    }
  ]
};

let token;
let orderId;

test.beforeAll(async () => {
  const apiContext = await request.newContext();

  // 🔐 LOGIN API
  const loginResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data: loginPayLoad
    }
  );

  expect(loginResponse.ok()).toBeTruthy();

  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token; // ✅ FIXED

  console.log("Token:", token);

  // 🛒 CREATE ORDER API
  const orderResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
      data: orderPayLoad,
      headers: {
        Authorization: token,
        "Content-Type": "application/json"
      }
    }
  );

  expect(orderResponse.ok()).toBeTruthy();

  const orderResponseJson = await orderResponse.json();

  orderId = orderResponseJson.orders[0]; // adjust if API returns different key

  console.log("Order ID:", orderId);
});

// 🌐 UI TEST
test('Client App login and verify', async ({ page }) => {
  // Inject token into localStorage
  await page.addInitScript((value) => {
    window.localStorage.setItem('token', value);
  }, token);

  await page.goto("https://rahulshettyacademy.com/client/");

  await expect(page).toHaveURL(/client/);
});