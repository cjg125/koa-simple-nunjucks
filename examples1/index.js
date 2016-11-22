const path = require('path')
const app = require('koa')()
const nj = require('../index')

app.use(nj({
  path: path.resolve('examples/template')
}, {
  watch: true
}))

app.use(function*(next) {
  yield this.render('index.html', { body: 'Hello World' })
})

app.listen(3000)
