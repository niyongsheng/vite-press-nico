# WMS 2.0 - Smart Warehouse Management System

## 📋 Project Overview

**WMS 2.0 (Warehouse Management System)** is an enterprise-grade intelligent warehouse management solution designed for modern logistics and supply chain operations. Built on a monolithic service architecture, it covers the complete warehouse workflow — from inbound and outbound operations to inventory management and data analytics — comprehensively improving warehouse efficiency and decision-making capabilities.

### 🎯 Key Features
- **Full Workflow Coverage**: Complete business processes from inbound to outbound
- **Multi-Platform Support**: Web admin console, mobile H5, and native APP
- **Real-Time Monitoring**: Live inventory status and task progress tracking
- **Data Analytics**: Powerful BI reporting and visual analysis

## 🚀 Core Modules

### 1. Inbound Management
- **Receiving**: Supports multiple receiving modes (purchase receiving, return receiving, transfer receiving)
- **Quality Inspection**: Product quality inspection and acceptance workflows
- **Putaway**: AI-suggested optimal bin locations to boost putaway efficiency
- **Inbound Documents**: Complete inbound records and full traceability

### 2. Outbound Management
- **Order Processing**: Supports multiple order types (sales orders, transfer orders, return orders)
- **Picking**: Intelligent pick path planning with wave picking support
- **Packing**: Packing material management and packing workflows
- **Shipping**: Logistics information management and shipping confirmation

### 3. Inventory Management
- **Real-Time Inventory**: Multi-dimensional inventory queries with real-time status updates
- **Stocktaking**: Supports cycle counting, dynamic counting, and full counting
- **Inventory Transfer**: Cross-warehouse stock transfers and balancing
- **Inventory Alerts**: Smart low-stock alerts and replenishment suggestions

### 4. Location Management
- **Location Planning**: Flexible bin coding and zone management
- **Location Optimization**: AI-based bin allocation optimization algorithm
- **Location Monitoring**: Utilization and turnover rate analysis
- **Location Adjustment**: Dynamic bin adjustments and re-planning

### 5. Operation Management
- **Task Scheduling**: Intelligent task assignment and scheduling
- **Task Monitoring**: Real-time progress tracking and exception handling
- **Task Statistics**: Efficiency analysis and KPI metrics
- **Task Optimization**: Workflow optimization driven by historical data

### 6. Data Analytics
- **Real-Time Monitoring**: Live dashboard of warehouse operations
- **Business Reports**: Multi-dimensional business data reports
- **Trend Analysis**: Inventory and business trend analysis
- **Predictive Analytics**: Demand forecasting based on machine learning

## 🛠️ Technology Stack

### Frontend
- **Web Admin**: Vue 3 + TypeScript + Element Plus
- **Mobile H5**: Vue 3 + uView + colorUI
- **APP**: React Native + TypeScript
- **State Management**: Vuex
- **Build Tools**: Vite / Webpack

### Backend
- **Language**: Java 17 + JavaScript
- **Framework**: Spring Boot 3.x
- **Database**: MySQL 8.0 + Redis 7.0
- **Message Queue**: Apache RocketMQ
- **Cache**: Redis Cluster + Caffeine

### Infrastructure
- **Containerization**: Docker
- **Web Server**: Nginx
- **Monitoring**: SkyWalking
- **Logging**: Logback
- **CI/CD**: Jenkins + GitLab CI

## 🏗️ System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│    Frontend Apps   │    │    Mobile App     │    │   APP             │
│  (Vue 3 + TS)   │    │  (Vue 3 + uView)│    │ (React Native)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
           │                       │                       │
           └───────────────────────┼───────────────────────┘
                                   │
                    ┌─────────────────────────────────────┐
                    │           API Gateway Layer           │
                    │        (Spring Cloud Gateway)       │
                    └─────────────────────────────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│    User Service   │    │   Order Service   │    │   Stock Service   │
│ (User Service)  │    │(Order Service)  │    │(Stock Service)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
           │                       │                       │
           └───────────────────────┼───────────────────────┘
                                   │
                    ┌─────────────────────────────────────┐
                    │           Data Storage Layer           │
                    │    MySQL + Redis + Elasticsearch    │
                    └─────────────────────────────────────┘
```

## 📱 Access

### 🌐 Online Demo
- **Admin Console**: [http://wms-admin.nicolab.top/](http://wms-admin.nicolab.top/)
- **Data Dashboard**: [http://wms-admin.nicolab.top/dashboard/big-data](http://wms-admin.nicolab.top/dashboard/big-data)
- **H5**: [http://wms-app.nicolab.top/](http://wms-app.nicolab.top/)

#### Backup Services
- **Admin Console**: [http://wms-admin.NicoLab.com/](http://wms-admin.NicoLab.com/)
- **Data Dashboard**: [http://wms-admin.NicoLab.com/dashboard/big-data](http://wms-admin.NicoLab.com/dashboard/big-data)
- **H5**: [http://wms-uni.NicoLab.com/](http://wms-uni.NicoLab.com/)

### 📱 Mobile App
- **APP**: [https://fir.xcxwo.com/93bhsrl7?release_id=68b11bfdf94548370af85c12](https://fir.xcxwo.com/93bhsrl7?release_id=68b11bfdf94548370af85c12)

### 🔑 Test Accounts
> 💡 **Please contact the developer to obtain test account credentials**
> - Supports testing across multiple roles and permission levels
> - All core features are available to try

## 📊 Demo Video

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=114619490241718&bvid=BV1KX7hzFE5f&cid=30309483012&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 🔧 Deployment Requirements

### System Requirements
- **OS**: Linux (CentOS 7+, Ubuntu 18+)
- **Memory**: 8GB minimum, 16GB+ recommended
- **Storage**: 100GB minimum, 500GB+ recommended
- **CPU**: 4 cores minimum, 8+ cores recommended

### Software Dependencies
- **Java**: JDK 17+
- **Database**: MySQL 8.0+
- **Cache**: Redis 7.0+
- **Container**: Docker 20.10+
