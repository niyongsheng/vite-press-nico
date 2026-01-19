# Nico - VitePress 文档系统

<img src="./logo.png" alt="LoopLoopTech Logo" width="100" />

![Pages](https://img.shields.io/badge/Developing-0.0.1-brightgreen.svg?style=flat-square)

> 一个基于 VitePress 构建的现代化文档管理系统，采用 VitePress 构建，集成多彩主题和 Vue 组件，提供优雅的文档展示和用户体验。。

## 🎯 项目简介

[nicolab.top](https://nicolab.top)是一个独立开发者的项目介绍网站。

## ✨ 核心特性

- 🎨 **多彩主题**: 集成 `vitepress-colorful-themes`，支持多种主题切换
- 🧩 **Vue 组件**: 全面支持 Vue 3 组件开发
- 🎯 **Element Plus**: 集成 Element Plus UI 库，提供丰富的组件
- 🌐 **多语言支持**: 支持中英文双语文档
- 📱 **响应式设计**: 完美适配各种设备屏幕

## 📦 集成框架

- [x] [vitepress-colorful-themes](https://www.npmjs.com/package/vitepress-colorful-themes)
- [x] [Vue 3](https://vuejs.org/)
- [x] [Element Plus](https://element-plus.org/)

## 🚀 快速开始

### 1. 创建 VitePress 项目

```bash
# 使用 npm
npm create vitepress@latest my-docs

# 使用 yarn
yarn create vitepress my-docs

# 使用 pnpm
pnpm create vitepress my-docs
```

### 2. 安装依赖

安装主题以及相关依赖：

```bash
# 使用 npm
npm install vitepress-colorful-themes element-plus @element-plus/icons-vue
npm install -D unplugin-auto-import unplugin-vue-components

# 使用 yarn
yarn add vitepress-colorful-themes element-plus @element-plus/icons-vue
yarn add -D unplugin-auto-import unplugin-vue-components

# 使用 pnpm
pnpm add vitepress-colorful-themes element-plus @element-plus/icons-vue
pnpm add -D unplugin-auto-import unplugin-vue-components
```

### 3. 配置主题
创建或修改 `.vitepress/theme/index.ts` 文件，引入并导出 `vitepress-colorful-themes` 主题：
```typescript
import type { Theme } from 'vitepress';
import ColorfulTheme from 'vitepress-colorful-themes';

// 简单导入并导出
export default ColorfulTheme;

// 或者进行自定义配置后导出
// export default {
//   // 这里可以添加自定义配置
//   ...ColorfulTheme,
// };
```

同时，在 `.vitepress/config.mts` 文件中配置 Element Plus 的自动导入（如果使用 TypeScript），示例如下：
```typescript
import { defineConfig } from 'vitepress';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  // 其他配置...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
```

### 4. 启动项目

```bash
# 使用 npm
npm run dev

# 使用 yarn
yarn dev

# 使用 pnpm
pnpm run dev
```

### 5. 构建项目

```bash
# 使用 npm
npm run build

# 使用 yarn
yarn build

# 使用 pnpm
pnpm run build
```

### 6. 预览构建结果

```bash
# 使用 npm
npm run serve

# 使用 yarn
yarn serve

# 使用 pnpm
pnpm run serve
```

## 📁 项目结构

```
.
├── docs/                    # 文档源文件
│   ├── .vitepress/         # VitePress 配置目录
│   │   ├── config.mts      # 主配置文件
│   │   └── theme/          # 主题配置
│   ├── en/                 # 英文文档
│   ├── projects/           # 项目展示
│   └── index.md            # 首页
├── package.json            # 项目依赖
└── README.md               # 项目说明
```

## 🎨 主题配置

项目使用 `vitepress-colorful-themes` 主题，支持多种颜色主题切换。在 `.vitepress/config.mts` 中可以配置主题颜色和其他选项。

## 🌐 多语言支持

项目支持中英文双语文档，通过 VitePress 的多语言功能实现。在 `.vitepress/config.mts` 中配置了 `locales` 选项。

## 📝 文档编写

使用 Markdown 编写文档，支持 VitePress 扩展语法和 Vue 组件。

## 📄 许可证

MIT License
