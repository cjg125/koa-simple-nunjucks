const app = require('koa')()
const nj = require('../index')

app.use(nj('Examples/template', { watch: true }))

app.use(function*(next) {
  yield this.render('index.html', { body: 'Hello World' })
})

app.listen(3000)
