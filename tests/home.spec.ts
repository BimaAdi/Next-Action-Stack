import { test, expect } from "@playwright/test";

test("server component", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const serverComponent = page.locator("#testServerComponentId");
  await expect(serverComponent).toHaveText("Hello from server");
});

test("server action", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  page.getByTestId("server-action-input").fill("John");
  page.getByTestId("server-action-submit").click();
  const result = page.getByTestId("server-action-output");
  await expect(result).toHaveText("Hello John !!!");
});

test("protected server component", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const serverComponent = page.locator("#testProtectedServerComponentId");
  await expect(serverComponent).toHaveText("Please SignIn");
});

test("protected server action", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  page.getByTestId("protected-server-action-input").fill("John");
  page.getByTestId("protected-server-action-submit").click();
  const result = page.getByTestId("protected-server-action-output");
  await expect(result).toHaveText("Please SignIn");
});
