# 项目概述

本项目是一个基于 Vue 框架开发的动漫角色周边购物网站，旨在为动漫爱好者提供便捷的二次元周边（如手办、布偶等）在线购买平台。网站实现了商品展示、分类浏览、搜索查询、商品详情查看、购物车管理、用户登录注册及模拟支付等完整的购物流程，采用 Mock.js 模拟后端接口，通过 Pinia 进行状态管理，同时结合 localStorage 实现数据本地存储。

## 技术栈

前端框架：Vue
状态管理：Pinia
HTTP 请求：Axios
UI 组件：Element Plus（部分组件使用）
模拟后端：Mock.js
路由管理：Vue Router
样式处理：CSS（自定义样式）

## 项目结构

├── 页面组件
│   ├── 首页组件（含导航、轮播、分类浏览）
│   ├── 商品展示组件
│   ├── 商品详情组件
│   ├── 购物车组件
│   ├── 登录/注册组件
│   └── 公共头部/底部组件
├── 状态管理
│   └── Pinia存储（购物车数据、用户状态）
├── 路由配置
│   ├── 首页路由（/Home）
│   ├── 商品展示路由（/course）
│   ├── 商品详情路由（/detail）
│   ├── 购物车路由（/cart）
│   └── 登录路由（/login）
└── 模拟接口
    ├── 商品数据接口
    ├── 登录验证接口
    └── 支付接口

## 项目特点

响应式设计：适配不同设备浏览需求
交互体验：包含动态导航、hover 效果、渐变背景等视觉增强
数据持久化：购物车数据同步至本地存储，避免页面刷新丢失
模块化开发：组件化设计提高代码复用性与可维护性

## 待优化方向

完善用户退出功能
统一 UI 组件风格（增强 Element Plus 使用一致性）
优化商品卡片样式，提升视觉效果
增加商品评价、收藏等功能
实现分页加载，优化大量商品展示性能

# myrouter

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
