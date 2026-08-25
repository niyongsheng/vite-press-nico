# LIMS - 实验室信息管理系统

## 📋 项目概述

**LIMS（实验室信息管理系统）** 是一款面向环境检测实验室的数字化管理平台，覆盖方案设计、记录生成、质量控制、报告生成的全流程业务闭环，并内置流程审批、动态权限、定时任务与 AI Agent 能力，实现实验室管理的数字化与标准化。

### 🎯 核心功能
- **方案设计** —— 检测方案在线设计与评审
- **记录生成** —— 原始记录、检验数据自动生成
- **质量控制** —— 质控计划与数据监控
- **报告生成** —— 报告自动生成与在线文档编辑
- **流程审批** —— Flowable 工作流驱动的多级审批
- **智能辅助** —— 基于 LangChain4j 的 AI Agent

## 🛠️ 技术架构

### 后端（nys_lims_service）
- **框架**：Java 17 + Spring Boot 3.2 + MyBatis，基于 RuoYi-Vue-fast 二次开发
- **工作流**：Flowable 7.0.1 ｜ **AI 集成**：LangChain4j
- **存储**：MySQL 8 + Redis 7 + RustFS/S3 对象存储
- **文档处理**：Aspose（Cells / Words / PDF / OCR）+ PageOffice 在线编辑

### 前端
- **后台管理（nys_lims_admin）**：Vue 3 + Vite + Element Plus + Pinia + ECharts + BPMN.js 流程设计
- **移动端（nys_lims_app）**：uni-app 3 + Vue 3 + TypeScript + wot-ui，一套代码运行 H5 / 微信小程序 / Android

---

## 📱 系统访问

### 🌐 在线演示
- **管理后台**：[https://www.bilibili.com/video/BV14GbY6LETY](https://www.bilibili.com/video/BV14GbY6LETY)

### 🔑 测试账号
> 💡 **请联系开发者获取测试账号和密码**

*🔬 LIMS - 让实验室管理更科学、更规范、更高效！*
