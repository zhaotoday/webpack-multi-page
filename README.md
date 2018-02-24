## 简介
基于 Webpack 开发、调试和构建多页面站点（普通 Web 站点）的前端工程化方案，同时适用于 PC 端和移动端。

## 特性
- 前端工程化
- 集成 PostCSS、Sass
- 支持 EJS 模板引擎
- 支持响应式
- 支持模块化、组件化
- 支持开发、调试和构建
- 支持 JS、CSS 代码规范性校验

## 兼容
- PC 端：IE8+（含 IE8）；
- 移动端：主流浏览器；

## 项目地址
https://github.com/zhaotoday/webpack-multi-page

## 线上例子
- [www.liruan.cn](https://www.liruan.cn/)

## 参考
- [JavaScript 代码规范](https://github.com/feross/standard/blob/master/docs/README-zhcn.md)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [sass-utils](https://github.com/zhaotoday/sass-utils)
- [compass](http://compass-style.org/)
- [include-media](https://github.com/eduardoboucas/include-media)
- [react 项目的一个ie8兼容性问题](http://www.aliued.com/?p=3240)
- [PostCSS](https://github.com/postcss/postcss/blob/master/README.cn.md)
- [EJS 模板引擎](https://ejs.bootcss.com)
- [EJS 模板语言使用](https://www.w3cschool.cn/weflow/weflow-ejs.html)
- [Handlebars 模板引擎](http://handlebarsjs.cn)

## Webpack
- [Webpack 中文文档](https://www.webpackjs.com/concepts/)
- [Webpack 2.2 中文文档](http://www.css88.com/doc/webpack2/)
- [webpack报错no postcss config...](https://www.cnblogs.com/wang715100018066/p/7049981.html)
- [webpack-dev-server 示例](https://github.com/webpack/webpack-dev-server/blob/master/examples/api/simple/server.js)

## 命令
```bash
# 安装依赖（在根目录、build、build-ie8 目录下执行）
$ npm install

# 开发、调试（在 build 目录下执行）
$ npm run dev

# 构建（在 build 目录下执行）
$ npm run build

# 如果需要兼容 IE8，将 src 复制到 build-ie8/website 下，并构建（在 build-ie8 目录下执行）
$ npm run build

# 预览
$ open http://localhost:8083/webpack-dev-server/my-view.html

# fix JS 代码
$ npm run eslintfix

# 校验 JS 代码
$ npm run eslint

# 校验 CSS 代码
$ npm run stylelint
```

## 添加 polyfill
使用 ES6 语法开发时，可按需引入 polyfill，提高浏览器兼容性。
```bash
# 安装 core-js
$ npm install --save core-js
```
polyfill 在 src/static/commons/scripts/utils/polyfills.js 中引入：
```js
import 'core-js/es6/promise'
```

## CSS 规范
请参照 BEM 规范，详情见：[https://github.com/zhaotoday/bem](https://github.com/zhaotoday/bem)，下面是一个例子：
HTML 代码：
```html
<nav class="nav">
  <a href="#" class="nav__item nav__item--normal">正常状态</a>
  <a href="#" class="nav__item nav__item--active">当前状态</a>
  <a href="#" class="nav__item nav__item--hover">鼠标移上时的状态</a>
</nav>
```
Sass 代码：
```scss
.nav {
  &__item {
    &--normal {
    }
    &--active {
    }
    &--hover {
    }
  }
}
```
基于 BEM mixin 的 Sass 代码：
```scss
@include b(nav) {
  @include e(item) {
    @include m(normal) {
    }
    @include m(active) {
    }
    @include m(hover) {
    }
  }
}
```

## 响应式
```scss
@import "~include-media/dist/_include-media.scss";

$breakpoints: (phone: 320px, tablet: 768px, desktop: 1024px);

.selector {
  @include media("<=tablet") {
    background-color: red;
  }

  @include media(">tablet", "<desktop") {
    background-color: yellow;
  }

  @include media(">=desktop") {
    background-color: green;
  }
}
```

## IE8 兼容
- 添加 es3ify-webpack-plugin，解决 es3 语法兼容问题：
```bash
$ npm install --save-dev es3ify-webpack-plugin
```
```js
const es3ifyPlugin = require('es3ify-webpack-plugin');

// 在 Webpack plugins 配置中添加
const config = {
  plugins: [
    new es3ifyPlugin()
  ]
}
```
- 添加 es5-shim 和 es5-sham，解决 es3 环境下 es5 API 缺失问题：
```html
<!--[if lt IE 9]>
<script src="//cdn.liruan.cn/es5-shim/4.5.9/es5-shim.min.js"></script>
<script src="//cdn.liruan.cn/es5-shim/4.5.9/es5-sham.min.js"></script>
<![endif]-->
```
- 引入 selectivizr.js，使 IE8 支持 CSS3 伪类以及属性选择器：
```html
<!--[if lt IE 9]>
<script src="//cdn.liruan.cn/nwmatcher/1.3.6/nwmatcher.min.js"></script>
<script src="//cdn.liruan.cn/selectivizr/1.0.2/selectivizr-min.js"></script>
<![endif]-->
```
- 尽量减少使用 CSS3，并且不使用 IE8 不能模拟的 ECMAScript 5 特性；
- 请用 build 的构建方案来开发调试，构建时，将 src 复制到 build-ie8/website 下，并在 build-ie8 下执行 npm run build；

## 目录结构
```
|- build                           // Webpack 配置
|- src                             // 源码
|    |- static                     // 静态资源
|       |- commons                 // 公用脚本和样式，构建成 commons.js 和 commons.css
|          |- components           // 组件集合
|             |- my-component      // my-component 组件
|                |- images         // 页面引用图片
|                |- styles         // 样式
|                   |- index.scss
|                   |- images      // CSS 引用图片
|          |- scripts              // 脚本
|             |- index.js          // 需要引入 components 中的所有样式文件和 styles/index.scss
|             |- utils
|          |- styles               // 样式
|             |- index.scss
|             |- reset.scss        // 重置
|             |- fonts.scss        // 字体
|             |- classes           // 样式类
|             |- images            // CSS 引用图片
|       |- my-view                 // my-view 页面
|          |- images               // 页面引用图片
|          |- scripts              // 脚本
|             |- index.js
|             |- utils
|          |- styles               // 样式
|             |- index.scss
|             |- images            // CSS 引用图片
|    |- views                      // 页面
|       |- commons                 // 公用组件、代码块等
|          |- components           // 组件集合
|             |- my-component.ejs  // my-component 组件
|          |- snippets             // 代码块，在各页面的 html 模板中引入
|             |- head.ejs          // 头部，也就是 <head> 标签
|             |- foot.ejs          // 底部，如：在页面底部引入的公用 JS、统计代码等
|       |- my-view.ejs             // my-view 页面
|    |- mock                       // mock 数据
|       |- data                    // 配置数据
|          |- global.json          // 全局配置数据
|          |- my-view.json         // my-view 页面配置数据
|    |- assets                     // 公用静态资源
|       |- scripts                 // 脚本
|          |- libs                 // JS 库
|          |- utils                // JS 工具集合
|       |- styles                  // 样式
|          |- utils                // Sass 工具集合
|             |- functions.scss    // 函数
|             |- mixins.scss       // 混合
|             |- variables.scss    // 变量
```
