# BestLoad - 优载.装箱桌面软件

## 📋 项目概述

**BestLoad（优载）** 是一款多箱体、多货物 3D 装箱规划桌面应用，基于自研开源算法 [smartpacker](https://github.com/niyongsheng/SmartPacker) 构建。面向物流、仓储、制造等场景，帮助用户以可视化的方式完成箱型与货物的装载规划，最大化空间利用率。

### 🎯 核心特点
- **多箱多货**：支持多箱型 × 多货物整体装载规划，货物按箱依次分配
- **3D 可视化**：react-three-fiber 交互式渲染，装载结果直观可查
- **本地持久化**：SQLite 本地存储，箱型 / 货物数据随开随用
- **桌面原生体验**：基于 Tauri 2，轻量、安全、跨平台

## 🚀 核心功能模块

### 1. 箱型 / 货物管理
- **箱型管理**：宽高深、核定载重、渲染颜色、可用数量，增删改查
- **货物管理**：尺寸、重量、数量、是否允许倒放（updown）、允许悬空比例（allowed_float_ratio）
- **本地持久化**：SQLite 存储，重启不丢失

### 2. 一键装箱
- **策略规划**：勾选箱型与货物，选择策略一键计算
- **多箱语义**：每件货物只装一次（`distribute_items`），按箱依次分配
- **数量展开**：货物 / 箱型 `count` 展开为独立实例（`id#序号`）
- **悬空控制**：支持 `allowed_float_ratio`（允许悬空比例）原样传入算法

### 3. 3D 预览
- **交互式渲染**：基于 react-three-fiber，可旋转、缩放、平移
- **放置进度**：按真实装箱顺序展示放置过程（进度滑块）
- **颜色标识**：货物以配置颜色区分，一目了然

## 🛠️ 技术架构

### 前端技术栈
- **UI 框架**：React 19 + TypeScript + antd 5
- **3D 渲染**：react-three-fiber + drei + three
- **状态管理**：zustand
- **构建工具**：Vite

### 后端技术栈
- **核心算法**：Rust（smartpacker，应用需求驱动）
- **本地服务**：axum + tokio（`127.0.0.1:3787`）
- **数据存储**：SQLite（rusqlite）
- **桌面壳**：Tauri 2

### 工程架构
- **Workspace 结构**：`best-load-core`（算法库）/ `best-load-server`（本地 HTTP 服务）/ `tauri-shell`（桌面壳）
- **类型同步**：Rust 结构体打 `#[typeshare]` 生成 TS 绑定（`react-ui/src/types/bindings.ts`），前后端类型自动同步

### 算法约定
- **坐标系**：原点在容器左下角，x 右 / y 上 / z 前（与 py3dbp 一致，three.js 无需转置）
- **货物姿态**：`updown = true` 支持 6 姿态全旋转；`false` 仅平面内 2 姿态

---

## 🚀 快速开始

```bash
pnpm install                # 前端依赖（含 @tauri-apps/cli）
cargo test --workspace      # 算法与 crate 测试
pnpm tauri dev              # 启动桌面应用（首次编译 5~15 分钟）
```

应用启动时由壳拉起本地 HTTP 服务（`127.0.0.1:3787`），浏览器单独调试：

```bash
BEST_LOAD_DB=./dev.db cargo run -p best-load-server && pnpm --dir react-ui dev
```

### 📦 仓库地址

- **GitHub**：[https://github.com/niyongsheng/best-load](https://github.com/niyongsheng/best-load)

*📦 BestLoad - 让每一次装箱都恰到好处！*
