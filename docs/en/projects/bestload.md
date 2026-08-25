# BestLoad - Cargo Packing Desktop App

## 📋 Project Overview

**BestLoad** is a multi-bin, multi-item 3D cargo packing desktop application, powered by the open-source [smartpacker](https://github.com/niyongsheng/SmartPacker) algorithm. Designed for logistics, warehousing, and manufacturing scenarios, it helps users plan bin and cargo loading visually to maximize space utilization.

### 🎯 Key Features
- **Multi-bin, multi-item**: Supports whole-load planning across multiple bin types × multiple cargo items, distributed bin by bin
- **3D visualization**: Interactive rendering with react-three-fiber for intuitive load inspection
- **Local persistence**: SQLite storage, bin/cargo data available anytime
- **Native desktop experience**: Built on Tauri 2 — lightweight, secure, cross-platform

## 🚀 Core Modules

### 1. Bin / Cargo Management
- **Bin management**: Width/height/depth, rated load, render color, available count — full CRUD
- **Cargo management**: Dimensions, weight, quantity, updown flag, allowed float ratio (`allowed_float_ratio`)
- **Local persistence**: SQLite storage survives restarts

### 2. One-Click Packing
- **Strategy planning**: Select bin types and cargo, pick a strategy, and compute with one click
- **Multi-bin semantics**: Each item is packed exactly once (`distribute_items`), allocated bin by bin
- **Quantity expansion**: Cargo/bin `count` expands into independent instances (`id#sequence`)
- **Float control**: `allowed_float_ratio` is passed through to the algorithm unchanged

### 3. 3D Preview
- **Interactive rendering**: Built on react-three-fiber — rotate, zoom, and pan
- **Placement progress**: Animated slider following the real packing order
- **Color coding**: Cargo distinguished by configured colors at a glance

## 🛠️ Technology Architecture

### Frontend Stack
- **UI framework**: React 19 + TypeScript + antd 5
- **3D rendering**: react-three-fiber + drei + three
- **State management**: zustand
- **Build tool**: Vite

### Backend Stack
- **Core algorithm**: Rust (smartpacker, driven by application needs)
- **Local service**: axum + tokio (`127.0.0.1:3787`)
- **Data storage**: SQLite (rusqlite)
- **Desktop shell**: Tauri 2

### Engineering Architecture
- **Workspace layout**: `best-load-core` (algorithm library) / `best-load-server` (local HTTP service) / `tauri-shell` (desktop shell)
- **Type synchronization**: Rust structs annotated with `#[typeshare]` generate TS bindings (`react-ui/src/types/bindings.ts`), keeping frontend/backend types in sync

### Algorithm Conventions
- **Coordinate system**: Origin at the container's bottom-left corner; x right / y up / z forward (consistent with py3dbp — no transposition needed in three.js)
- **Cargo orientation**: `updown = true` allows full 6-orientation rotation; `false` restricts to 2 orientations in-plane

---

## 🚀 Getting Started

```bash
pnpm install                # Frontend deps (incl. @tauri-apps/cli)
cargo test --workspace      # Algorithm and crate tests
pnpm tauri dev              # Launch the desktop app (5–15 min first compile)
```

The shell spawns a local HTTP service (`127.0.0.1:3787`) on startup. To debug in the browser standalone:

```bash
BEST_LOAD_DB=./dev.db cargo run -p best-load-server && pnpm --dir react-ui dev
```

### 📦 Repository

- **GitHub**: [https://github.com/niyongsheng/best-load](https://github.com/niyongsheng/best-load)

*📦 BestLoad — every load, perfectly packed!*
