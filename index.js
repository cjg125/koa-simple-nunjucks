'use strict'

const nj = require('nunjucks')

module.exports = function(config, options = {}) {
  let env = nj.configure(config.path, options)
  return function*(next) {
    this.render = (file, data) => {
      return (done) => {
        env.render(file, data || {}, (err, res) => {
          err && (res = err.message)
          this.body = res
          done()
        })
      }
    }
    yield next
  }
}
