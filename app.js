const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001
app.use(express.static('dist'))

// --- 在这里添加测试接口 ---
app.get('/version', (req, res) => {
  res.send('1') // 当你下次想测试部署是否生效时，把这里改成 '2'
})
//防止“坏代码”上线导致服务崩溃。
app.get('/health', (req, res) => {
  res.send('ok')
})
// -----------------------

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()
