# jsonp-promi 

---

<p align="center"><b>🔥 Do you like jsonp ? no ? yeah i dont like it, if you dont like it and also use it,you can use the json-promi.it is so easy</b></p>

---


## Install

```
$ npm install query-string
```


## Usage

```js
const queryString = require('query-string');

console.log(location.search);
//=> '?foo=bar'

const parsed = queryString.parse(location.search);
console.log(parsed);
//=> {foo: 'bar'}

console.log(location.hash);
//=> '#token=bada55cafe'

const parsedHash = queryString.parse(location.hash);
console.log(parsedHash);
//=> {token: 'bada55cafe'}

parsed.foo = 'unicorn';
parsed.ilike = 'pizza';

const stringified = queryString.stringify(parsed);
//=> 'foo=unicorn&ilike=pizza'

location.search = stringified;
// note that `location.search` automatically prepends a question mark
console.log(location.search);
//=> '?foo=unicorn&ilike=pizza'
```


## API

### .parse(*string*, *[options]*)

Parse a query string into an object. Leading `?` or `#` are ignored, so you can pass `location.search` or `location.hash` directly.

The returned object is created with [`Object.create(null)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) and thus does not have a `prototype`.

URI components are decoded with [`decode-uri-component`](https://github.com/SamVerschueren/decode-uri-component).

#### arrayFormat

Type: `string`<br>
Default: `'none'`

Supports both `index` for an indexed array representation or `bracket` for a *bracketed* array representation.

- `bracket`: stands for parsing correctly arrays with bracket representation on the query string, such as:

```js
queryString.parse('foo[]=1&foo[]=2&foo[]=3', {arrayFormat: 'bracket'});
//=> foo: [1,2,3]
```

- `index`: stands for parsing taking the index into account, such as:

```js
queryString.parse('foo[0]=1&foo[1]=2&foo[3]=3', {arrayFormat: 'index'});
//=> foo: [1,2,3]
```

- `none`: is the **default** option and removes any bracket representation, such as:

```js
queryString.parse('foo=1&foo=2&foo=3');
//=> foo: [1,2,3]
```

### .stringify(*object*, *[options]*)

Stringify an object into a query string, sorting the keys.

#### strict

Type: `boolean`<br>
Default: `true`

Strictly encode URI components with [strict-uri-encode](https://github.com/kevva/strict-uri-encode). It uses [encodeURIComponent](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
if set to false. You probably [don't care](https://github.com/sindresorhus/query-string/issues/42) about this option.

#### encode

Type: `boolean`<br>
Default: `true`

[URL encode](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) the keys and values.

#### arrayFormat

Type: `string`<br>
Default: `'none'`

Supports both `index` for an indexed array representation or `bracket` for a *bracketed* array representation.

- `bracket`: stands for parsing correctly arrays with bracket representation on the query string, such as:

```js
queryString.stringify({foo: [1,2,3]}, {arrayFormat: 'bracket'});
// => foo[]=1&foo[]=2&foo[]=3
```

- `index`: stands for parsing taking the index into account, such as:

```js
queryString.stringify({foo: [1,2,3]}, {arrayFormat: 'index'});
// => foo[0]=1&foo[1]=2&foo[3]=3
```

- `none`: is the __default__ option and removes any bracket representation, such as:

```js
queryString.stringify({foo: [1,2,3]});
// => foo=1&foo=2&foo=3
```

### .extract(*string*)

Extract a query string from a URL that can be passed into `.parse()`.
