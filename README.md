# cremgcy120

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

账号： 123 ， 密码： 123456

已经在webpack的配置开了代理：

```js
proxyTable: {
	"/api": {
		target: "http://120.24.63.55:9090/crEmgcy120/",
		changeOrigin: true,
		pathRewrite: {
			"^/api": ""
		}
	}
},
```


发送请求时，url这样写：/api/请求的路径（相当于 /api 是个模板字符串变量，/api = "http://120.24.63.55:9090/crEmgcy120/"）
