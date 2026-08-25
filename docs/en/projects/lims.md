# LIMS - Laboratory Information Management System

## 📋 Project Overview

**LIMS (Laboratory Information Management System)** is a digital management platform for environmental testing laboratories. It covers the full business loop — from scheme design, record generation, and quality control to report generation — with built-in workflow approval, dynamic permissions, scheduled tasks, and an AI Agent, bringing digitalization and standardization to laboratory management.

### 🎯 Key Features
- **Scheme design** — Online design and review of testing schemes
- **Record generation** — Auto-generated raw records and inspection data
- **Quality control** — QC plans and data monitoring
- **Report generation** — Auto-generated reports with online document editing
- **Workflow approval** — Multi-level approval powered by the Flowable engine
- **AI assistance** — AI Agent built on LangChain4j

## 🛠️ Technology Architecture

### Backend (nys_lims_service)
- **Framework**: Java 17 + Spring Boot 3.2 + MyBatis, built on RuoYi-Vue-fast
- **Workflow**: Flowable 7.0.1 ｜ **AI integration**: LangChain4j
- **Storage**: MySQL 8 + Redis 7 + RustFS/S3 object storage
- **Document processing**: Aspose (Cells / Words / PDF / OCR) + PageOffice online editing

### Frontend
- **Admin console (nys_lims_admin)**: Vue 3 + Vite + Element Plus + Pinia + ECharts + BPMN.js process design
- **Mobile app (nys_lims_app)**: uni-app 3 + Vue 3 + TypeScript + wot-ui — one codebase running on H5 / WeChat Mini Program / Android

---

## 📱 System Access

### 🌐 Online Demo
- **Admin console**: [https://www.bilibili.com/video/BV14GbY6LETY](https://www.bilibili.com/video/BV14GbY6LETY)

### 🔑 Test Account
> 💡 **Please contact the developer to obtain test account credentials**

*🔬 LIMS — making laboratory management more scientific, more standardized, and more efficient!*
