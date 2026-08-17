# ICMS - Intelligent Community Management System

## 📋 Project Overview

**ICMS (Intelligent Community Management System)** is an enterprise-grade smart community management solution designed to meet the intelligent management needs of modern residential communities, commercial complexes, and industrial parks. Built on cutting-edge technologies such as the Internet of Things (IoT), big data, and artificial intelligence, the system delivers comprehensive community service management, security surveillance, equipment operations, and data analytics.

### 🎯 System Highlights
- **Intelligent Management**: AI-driven decision-making, automatic alerts, and smart scheduling
- **Full-Scene Coverage**: A complete ecosystem spanning residential and commercial spaces, from security to services
- **Multi-Platform Support**: Web admin console, mobile app, mini programs, and smart devices
- **Real-Time Monitoring**: 24/7 real-time monitoring, status tracking, and anomaly alerts

## 🚀 Core Feature Modules

### 1. Community Management
- **Base Information Management**: Community profiles, buildings and units, property listings, owner records
- **Property Management**: Property fee management, repair requests, complaints and feedback, satisfaction surveys
- **Service Management**: Convenience services, housekeeping services, parcel collection, community events

### 2. Security & Surveillance
- **Access Control**: Facial recognition, card-based access, visitor registration, permission control
- **Video Surveillance**: HD cameras, intelligent analytics, anomaly detection, playback review
- **Vehicle Management**: Vehicle registration, parking management, violation monitoring, space allocation

### 3. Equipment Operations
- **Equipment Monitoring**: Real-time monitoring of access control, vehicle, and intercom equipment
- **Fault Alerts**: Intelligent status detection, predictive maintenance, repair dispatching
- **Energy Management**: Fault monitoring, energy consumption analysis, energy-saving optimization

### 4. Resident Services
- **Online Payments**: Pay property fees, utilities, parking, and more online
- **Repair Services**: Online repair requests, progress tracking, satisfaction ratings
- **Community Interaction**: Neighbor communication, second-hand marketplace, skill sharing, mutual-aid platform

## 🛠️ Technology Stack

### Frontend
- **Web Admin Console**: Vue + vxe-table + Element UI
- **Mobile App**: uni-app + uView + colorUI
- **Mini Programs**: WeChat Mini Program + Alipay Mini Program

### Backend
- **Language**: Java 8
- **Framework**: Spring Boot 2.x
- **Database**: MySQL 8.0 + Redis 7.0
- **Message Queue**: MQTT

### IoT Technologies
- **Communication Protocols**: MQTT + HTTP/HTTPS + WebSocket
- **Device Integration**: IoT Hub + device registration + protocol conversion
- **Edge Computing**: Local data processing + cloud-side collaborative computing
- **Data Collection**: Real-time data collection + batch data upload

## 🏗️ System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Web Frontend   │    │   Mobile App    │    │  Mini Program   │
│  (Vue 2 + Node) │    │  (Vue 2 + uni)  │    │  WeChat/Alipay  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
           │                       │                       │
           └───────────────────────┼───────────────────────┘
                                   │
                    ┌─────────────────────────────────────┐
                    │        API Gateway Layer            │
                    │     (Spring Cloud Gateway)          │
                    └─────────────────────────────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  User Service   │    │  Community Svc  │    │  Security Svc   │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
           │                       │                       │
           └───────────────────────┼───────────────────────┘
                                   │
                    ┌─────────────────────────────────────┐
                    │        Data Storage Layer           │
                    │        MySQL + Redis + MQTT         │
                    └─────────────────────────────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Device Access  │    │  Edge Computing │    │ Cloud Computing │
│  (IoT Gateway)  │    │  (Edge Compute) │    │ (Cloud Compute) │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📱 System Access

### 🌐 Live Demo

#### Production Services
- **Website**: [https://icms-web.NicoLab.com/](https://icms-web.NicoLab.com/)
- **Admin Console**: [https://icms-admin.NicoLab.com/](https://icms-admin.NicoLab.com/)
- **H5**: [https://icms-uni.NicoLab.com/](https://icms-uni.NicoLab.com/)
- **App**: [https://fir.xcxwo.com/t4fgam8d](https://fir.xcxwo.com/t4fgam8d)

### 🔑 Test Accounts
> 💡 **Please contact the developer to obtain test account credentials**

## 🔧 Deployment Requirements

### System Requirements
- **Operating System**: Linux (CentOS 7+, Ubuntu 18+)
- **Memory**: 16GB minimum, 32GB+ recommended
- **Storage**: 200GB minimum, 1TB+ recommended
- **CPU**: 8 cores minimum, 16+ cores recommended

### Software Dependencies
- **Java**: JDK 8+
- **Database**: MySQL 8.0+
- **Cache**: Redis 7.0+
- **Container**: Docker 20.10+

---

*🏘️ ICMS - Making community management smarter, more convenient, and more secure!*
