# WMS 2.0 - 智能仓库管理系统

## 📋 项目概述

**WMS 2.0 (Warehouse Management System)** 是一套企业级智能仓库管理解决方案，专为现代物流和供应链管理而设计。系统采用单体服务架构，提供完整的仓库作业流程管理，从入库到出库，从库存管理到数据分析，全方位提升仓库运营效率和决策能力。

### 🎯 系统特点
- **全流程覆盖**：从入库到出库的完整业务流程
- **多端支持**：Web后台、移动端、APP全覆盖
- **实时监控**：实时库存状态和作业进度跟踪
- **数据分析**：强大的BI报表和可视化分析

## 🚀 核心功能模块

### 1. 入库管理
- **收货管理**：支持多种收货方式（采购收货、退货收货、调拨收货）
- **质检管理**：商品质量检验和验收流程
- **上架管理**：智能推荐最优库位，提高上架效率
- **入库单据**：完整的入库凭证和追溯体系

### 2. 出库管理
- **订单处理**：支持多种订单类型（销售订单、调拨订单、退货订单）
- **拣货管理**：智能拣货路径规划，支持波次拣货
- **包装管理**：包装材料管理和包装作业流程
- **发货管理**：物流信息管理和发货确认

### 3. 库存管理
- **实时库存**：多维度库存查询和实时状态更新
- **库存盘点**：支持循环盘点、动态盘点和全面盘点
- **库存调拨**：跨仓库库存调拨和平衡
- **库存预警**：智能库存预警和补货建议

### 4. 库位管理
- **库位规划**：灵活的库位编码和分区管理
- **库位优化**：基于AI的库位分配优化算法
- **库位监控**：库位使用率和周转率分析
- **库位调整**：动态库位调整和重新规划

### 5. 作业管理
- **作业调度**：智能作业任务分配和调度
- **作业监控**：实时作业进度跟踪和异常处理
- **作业统计**：作业效率分析和KPI指标
- **作业优化**：基于历史数据的作业流程优化

### 6. 数据分析
- **实时监控**：仓库运营实时数据大屏
- **业务报表**：多维度业务数据报表
- **趋势分析**：库存趋势和业务趋势分析
- **预测分析**：基于机器学习的需求预测

## 🛠️ 技术架构

### 前端技术栈
- **Web后台**：Vue 3 + TypeScript + Element Plus
- **移动端**：Vue 3 + uView + colorUI
- **APP**：React Native + TypeScript
- **状态管理**：Vuex
- **构建工具**：Vite / Webpack

### 后端技术栈
- **开发语言**：Java 17 + js
- **服务框架**：Spring Boot 3.x
- **数据库**：MySQL 8.0 + Redis 7.0
- **消息队列**：Apache RocketMQ
- **缓存**：Redis Cluster + Caffeine

### 基础设施
- **容器化**：Docker
- **服务**：Nginx
- **监控**：SkyWalking
- **日志**：Logback
- **CI/CD**：Jenkins + GitLab CI

## 🏗️ 系统架构

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   前端应用层      │    │   移动端应用     │    │   APP应用        │
│  (Vue 3 + TS)   │    │  (Vue 3 + uView)│    │ (React Native)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
           │                       │                       │
           └───────────────────────┼───────────────────────┘
                                   │
                    ┌─────────────────────────────────────┐
                    │            API网关层                 │
                    │        (Spring Cloud Gateway)       │
                    └─────────────────────────────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   用户服务       │    │    订单服务       │    │   库存服务       │
│ (User Service)  │    │(Order Service)  │    │(Stock Service)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
           │                       │                       │
           └───────────────────────┼───────────────────────┘
                                   │
                    ┌─────────────────────────────────────┐
                    │           数据存储层                  │
                    │    MySQL + Redis + Elasticsearch    │
                    └─────────────────────────────────────┘
```

## 📱 系统访问

### 🌐 在线演示
- **后台管理**：[http://wms-admin.nicolab.top/](http://wms-admin.nicolab.top/)
- **数据大屏**：[http://wms-admin.nicolab.top/dashboard/big-data](http://wms-admin.nicolab.top/dashboard/big-data)
- **H5**：[http://wms-app.nicolab.top/](http://wms-app.nicolab.top/)

#### 备用服务
- **后台管理**：[http://wms-admin.looplooptech.com/](http://wms-admin.looplooptech.com/)
- **数据大屏**：[http://wms-admin.looplooptech.com/dashboard/big-data](http://wms-admin.looplooptech.com/dashboard/big-data)
- **H5**：[http://wms-uni.looplooptech.com/](http://wms-uni.looplooptech.com/)

### 📱 移动应用
- **APP**：[https://fir.xcxwo.com/93bhsrl7?release_id=68b11bfdf94548370af85c12](https://fir.xcxwo.com/93bhsrl7?release_id=68b11bfdf94548370af85c12)

### 🔑 测试账号
> 💡 **请联系开发者获取测试账号和密码**
> - 支持多种角色权限测试
> - 可体验所有核心功能

## 📊 演示视频

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=114619490241718&bvid=BV1KX7hzFE5f&cid=30309483012&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 🔧 部署要求

### 系统要求
- **操作系统**：Linux (CentOS 7+, Ubuntu 18+)
- **内存**：最低 8GB，推荐 16GB+
- **存储**：最低 100GB，推荐 500GB+
- **CPU**：最低 4核，推荐 8核+

### 软件依赖
- **Java**：JDK 17+
- **数据库**：MySQL 8.0+
- **缓存**：Redis 7.0+
- **容器**：Docker 20.10+
