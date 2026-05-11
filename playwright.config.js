// playwright.config.js
module.exports = {
  testDir: './e2e-tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:8080', // Webpack Dev Server 的默认端口
  },
  webServer: {
    command: 'npm start',  // 运行测试前，Playwright 会自动帮你在后台启动这个命令
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
  },
}