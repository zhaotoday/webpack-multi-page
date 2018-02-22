## 简介
基于 Webpack 开发、调试和构建多页面站点（普通 Web 站点）的前端工程化方案，同时适用于 PC 端和移动端。
> 开发 PC 端网站时，如果需要兼容 IE8，请尽量减少使用 CSS3，并且不使用 IE8 不能模拟的 ECMAScript 5 特性。

## 特性
- 前端工程化
- 集成 PostCSS、Sass
- 支持响应式
- 支持模块化、组件化
- 支持开发、调试和构建
- 支持 JS、CSS 代码规范性校验

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

## Webpack
- [Webpack 中文文档](https://www.webpackjs.com/concepts/)
- [Webpack 2.2 中文文档](http://www.css88.com/doc/webpack2/)
- [webpack报错no postcss config...](https://www.cnblogs.com/wang715100018066/p/7049981.html)
- [webpack-dev-server 示例](https://github.com/webpack/webpack-dev-server/blob/master/examples/api/simple/server.js)

## 命令
```bash
# 开发、调试
$ npm run dev

# 构建
$ npm run build

# fix JS 代码
$ npm run eslintfix

# 校验 JS 代码
$ npm run eslint

# 校验 CSS 代码
$ npm run stylelint
```

## 兼容性
- PC 端：IE8+（含 IE8）；
- 移动端：主流浏览器；

## 添加 polyfill
用 ES6 开发移动端网站时，可按需引入 polyfill，提高浏览器兼容性。
```bash
# 安装 core-js
$ npm install --save core-js
```
polyfill 在 `/src/projects/{your-project}/scripts/utils/polyfill.js` 文件中引入：
```js
import 'core-js/es6/promise'
```

## 样式编写规范
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
添加 es3ify-webpack-plugin，解决 es3 语法兼容问题：
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
添加 es5-shim 和 es5-sham，解决 es3 环境下 es5 API 缺失问题：
```html
<!--[if lt IE 9]>
<script src="//cdn.liruan.cn/es5-shim/4.5.9/es5-shim.min.js"></script>
<script src="//cdn.liruan.cn/es5-shim/4.5.9/es5-sham.min.js"></script>
<![endif]-->
```
引入 selectivizr.js，使 IE8 支持 CSS3 伪类以及属性选择器：
```html
<!--[if lt IE 9]>
<script src="//cdn.liruan.cn/nwmatcher/1.3.6/nwmatcher.min.js"></script>
<script src="//cdn.liruan.cn/selectivizr/1.0.2/selectivizr-min.js"></script>
<![endif]-->
```
> 如果无需兼容 IE8，请去掉以上相关操作！

## 组件化
将通用模块（如：面板、列表和 tab 菜单等）写成组件，提高代码复用率。组件放置在文件夹 `/src/commons/components` 下。

## 目录结构
```
|-- build                                    // Webpack 配置
|-- src                                      // 源码目录
|   |-- projects                             // 项目集合
|       |-- play                             // play 项目（举例）
|           |-- pages                        // 网站页面
|               |-- home                     // 首页（举例）
|                   |-- images               // 首页图片
|                   |-- scripts.js           // 首页脚本
|                   |-- styles.scss          // 首页样式
|                   |-- template.html        // 首页 html 模板
|               |-- news                     // 新闻页面（举例）
|           |-- commons                      // 公用代码
|               |-- components               // 公共组件
|                   |-- panel                // 面板组件（举例）
|                       |-- images           // 面板组件相关图片
|                       |-- styles.scss      // 面板组件相关样式
|                   |-- list                 // 列表组件（举例）
|               |-- requires                 // 公用代码块，在各页面的 html 模板中引入
|                   |-- head                 // 头部代码块，也就是 <head> 标签
|                   |-- foot                 // 底部代码块，如：在页面底部引入的公用 JS、统计代码等
|                   |-- header               // 页面头部展示内容，如：导航菜单等
|                   |-- footer               // 页面底部展示内容，如：页脚导航链接、版权信息等
|           |-- scripts                      // 脚本
|               |-- libs                     // JS 库
|               |-- utils                    // 一些 JS 工具集合
|                   |-- helpers.js           // 帮助函数集合
|                   |-- consts .js           // 常量配置
|                   |-- polyfill.js          // polyfill
|           |-- styles                       // 样式
|               |-- global                   // 全局样式
|                   |-- reset.scss           // 样式重置
|                   |-- classes              // 样式类
|               |-- utils                    // 样式工具集合
|                   |-- functions.scss       // SASS 函数
|                   |-- mixins.scss          // SASS 混合
|                   |-- variables.scss       // SASS 变量
|   |-- scripts                              // 脚本（全局）
|       |-- libs                             // JS 库
|       |-- utils                            // 一些 JS 工具集合
|           |-- helpers.js                   // 帮助函数集合
|   |-- styles                               // 样式（全局）
|       |-- utils                            // 样式工具集合
|           |-- functions.scss               // SASS 函数
|           |-- mixins.scss                  // SASS 混合
|           |-- variables.scss               // SASS 变量
```
