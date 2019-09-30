# jsonp-promi

## 安装

```
$ npm install jsonp-promi --save
```

## 用法

```js
// 如果你喜欢直接使用promise 那么可以按照以下方式使用
const jsonpPromise = require("jsonp-promi");

jsonpPromise("www.123.com", { params: "callback", timeout: 2000 })
  .then(data => {})
  .catch(err => {});
// 其实就像我们平时理解的那样，调用的url为'www.123.com?callback=fn'
```

```js
// 如果你喜欢用async await语法糖来解决promise的问题，那么你也可以这样使用
const jsonpPromise = require("jsonp-promi");
const fun = await function() {
  const res = async jsonpPromise("www.123.com", { params: "callback", timeout: 2000 });
  console.log(res); // res就是你想取到的数据
}
fun();
```
