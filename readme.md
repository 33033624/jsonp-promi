# jsonp-promi 

---

<p align="center"><b>🔥 Do you like jsonp ? no ? yeah i dont like it, if you dont like it and also use it,you can use the json-promi.it is so easy</b></p>

---


## Install

```
$ npm install jsonp-promi
```


## Usage

```js
const jsonpPromise = require('jsonp-promi');

jsonpPromise(url, opts).then((data) => {}).catch(err => {})
// the url is only url and the opts is params for example {params: 'callbackname', timeout: 20000 }, the timeout is default as 60000 and the params is default as 'callback'

// example 
jsonpPromise('www.123.com', {params: 'callback', timeout:2000 })
// it seem as 'www.123.com?callback=fn'
```

