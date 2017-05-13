## 简介
基于 Webpack 2 开发、调试和构建多页面站点（普通 Web 站点）的前端工程化方案，同时适用于 PC 端和移动端。
> 开发 PC 端网站时，如果需要兼容 IE8，编写 JS 请不要使用 IE8 不能模拟的 ECMAScript 5 特性和 CSS3。

## 功能
- 前端工程化
- 模块化
- 组件化
- 开发、调试和构建
- 集成 PostCSS、SASS
- JS 代码规范性校验
- CSS 代码规范性校验

## 项目地址
https://github.com/zhaotoday/webpack-website

## 使用
#### 1. 命令
```bash
# 下载代码
$ git clone https://github.com/zhaotoday/mobile-website.git
# 安装依赖
$ npm install
# 开发、调试
$ npm start
# 构建
$ npm run build
# 按 Standard 规范校验 JS 代码
$ npm run eslint
# 按 Standard 规范代码格式化 JS 代码
$ npm run eslintfix
# 校验 CSS 代码
$ npm run stylelint
```

#### 2. 修改 Webpack 配置
修改文件 `/build/utils/consts.js` 的 `pages` 变量，将其配置成自己开发的页面。

#### 3. 开发网站页面
在文件夹 `/src/pages` 下开发网站页面，页面文件夹命名与第 2 步的配置相对应。

## 兼容性
- PC 端：IE8+（含 IE8）；
- 移动端：主流浏览器；

## 添加 polyfill
用 ES6 开发移动端网站时，可按需引入 polyfill，提高浏览器兼容性。
```bash
# 安装 core-js
$ npm install --save core-js
```
polyfill 在 `/src/scripts/utils/polyfill.js` 文件中引入：
```js
import 'core-js/es6/promise'
```

## 样式编写规范
请参照 BEM 规范，详情见：[https://github.com/zhaotoday/bem](https://github.com/zhaotoday/bem)，下面是一个例子：
```html
<nav class="nav">
  <a href="#" class="nav__item nav__item--active">当前状态</a>
  <a href="#" class="nav__item nav__item--hover">鼠标移上时的状态</a>
  <a href="#" class="nav__item nav__item--normal">正常状态</a>
</nav>
```
```scss
.nav {
  &__item {
    &--active {
    }
    &--hover {
    }
    &--normal {
    }
  }
}
```

## 组件化
将通用模块（如：面板、列表和 tab 菜单等）写成组件，提高代码复用率。组件放置在文件夹 `/src/commons/components` 下。

## 目录结构
```
|-- build                            // Webpack 配置
|-- src                              // 源码目录
|   |-- pages                        // 网站页面
|       |-- home                     // 首页（举例）
|           |-- images               // 首页图片
|           |-- scripts.js           // 首页脚本
|           |-- styles.scss          // 首页样式
|           |-- template.html        // 首页 html 模板
|       |-- news                     // 新闻页面（举例）
|   |-- commons                      // 公用代码
|       |-- components               // 公共组件
|           |-- panel                // 面板组件（举例）
|               |-- images           // 面板组件相关图片
|               |-- styles.scss      // 面板组件相关样式
|           |-- list                 // 列表组件（举例）
|       |-- requires                 // 公用代码块，在各页面的 html 模板中引入
|           |-- head                 // 头部代码块，也就是 <head> 标签
|           |-- foot                 // 底部代码块，如：在页面底部引入的公用 JS、统计代码等
|           |-- header               // 页面头部展示内容，如：导航菜单等
|           |-- footer               // 页面底部展示内容，如：页脚导航链接、版权信息等
|   |-- scripts                      // 脚本
|       |-- libs                     // JS 库
|       |-- utils                    // 一些 JS 工具集合
|           |-- helpers.js           // 帮助函数集合
|           |-- consts .js           // 常量配置
|   |-- styles                       // 样式
|       |-- global                   // 全局样式
|           |-- reset.scss           // 样式重置
|           |-- classes              // 样式类
|       |-- utils                    // 样式工具集合
|           |-- functions.scss       // SASS 函数
|           |-- mixins.scss          // SASS 混合
|           |-- placeholders.scss    // SASS 占位符
|           |-- variables.scss       // SASS 变量

```