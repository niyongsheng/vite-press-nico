# VitePress
![(logo)](./logo.svg)
===
![Pages](https://img.shields.io/badge/Developing-0.0.1-brightgreen.svg?style=flat-square)
===

> 文档管理系统。
## 集成框架
- [x] [vitepress-colorful-themes]()
- [x] [Vue component]()


### 1. 创建 VitePress 项目

```bash
# 使用 yarn
yarn create vitepress my-docs
```

### 2. 安装依赖
进入项目目录：
```bash
cd my-docs
```
安装主题以及相关依赖：
```bash
# 安装 vitepress-colorful-themes
yarn add vitepress-colorful-themes

# 安装 Element Plus 和相关插件
yarn add element-plus @element-plus/icons-vue
yarn add -D unplugin-auto-import unplugin-vue-components



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
# 使用 yarn
yarn docs:dev

```
