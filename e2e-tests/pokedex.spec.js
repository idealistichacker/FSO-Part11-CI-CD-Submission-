const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('') // 注意：这里留空或用 '/'，Playwright 配置会补完 baseURL
    await expect(page.getByText('pikachu')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('pokemon page can be navigated to', async ({ page }) => {
    await page.goto('')
    await page.click('text=pikachu')
    await expect(page.getByText('lightning rod')).toBeVisible()
  })
})