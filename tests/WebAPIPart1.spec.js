const {test, expect, request}= require ('@playwright/test');
const loginPayLoad = {"userEmail": "94rohit15@gmail.com", userPassword: "Rohit007@"};

test.beforeAll( async ()=>

{

const apiContext = await request.newContext();
const loginResponse = apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login"
, {
    data: loginPayLoad

  })
  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson = loginResponse.json();

});
