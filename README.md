## 简介
基于 Webpack 2 开发、调试和构建多页面站点（普通 Web 站点）的前端工程化方案。

## 项目地址
https://github.com/zhaotoday/mobile-website

## 使用
```bash
# 下载代码
$ git clone https://github.com/zhaotoday/mobile-website.git
# 安装依赖
$ npm install
# 开发、调试
$ npm start
# 构建
$ npm run build
```

## 样式编写规范
参照 BEM 规范，详情见：https://github.com/zhaotoday/bem 。

## 目录结构
```
|-- build                            // Webpack 项目构建
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
|       |-- requires                 // 公用代码块
|           |-- head                 // 头部代码块（也就是 <head> 标签）
|           |-- foot                 // 底部代码块（在页面底部引入的公用 JS）
|           |-- header               // 页面头部展示内容（如：导航菜单等）
|           |-- footer               // 页面底部展示内容（如：页脚导航链接、版权信息等）
|   |-- scripts                      // 脚本
|       |-- libs                     // JS 库
|       |-- utils                    // 一些 JS 工具集合
|   |-- styles                       // 样式
```