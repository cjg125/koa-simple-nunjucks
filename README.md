#  Koa middleware for Nunjucks.
## Install

```bash
$ npm install --save-dev koa-simple-nunjucks
```

## Usage

```js
const app = require('koa')()
const nj = require('koa-simple-nunjucks')

app.use(nj('template', { watch: true }))

app.use(function*(next) {
  yield this.render('index.html', { body: 'Hello World' })
})

app.listen(3000)

```

## Examples
```sh
$ git clone https://github.com/cjg125/koa-simple-nunjucks.git demo
$ cd demo
$ node examples/
# http://127.0.0.1:3000/
```

## Config Options

[nunjucks](https://mozilla.github.io/nunjucks/api.html#configure)

