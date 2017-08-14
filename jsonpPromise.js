const jsonp = require('./jsonp.js')
const jsonpPromise = (url, opts) => {
  return new Promise((resolve, reject) => {
    jsonp(url, opts, (err, data) => {
      return err ?  reject(err) : resolve(data)
    })
  })
}
module.exports = jsonpPromise
