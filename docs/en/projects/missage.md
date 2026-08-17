# Missage Chat App

## Project Overview

Missage is a full-featured instant messaging application that supports multi-platform deployment, including group chat, audio-video calls, a customer service system, and bots. Built with native development, it delivers a complete chat solution.

## Technology Stack

- **Backend**: Java
- **Database**: MySQL
- **Mobile**: Native apps (Android/iOS)
- **Web**: Admin dashboard
- **Deployment**: Docker containerization

## Core Features

### Instant Messaging
- One-on-one private chat
- Group chat
- Message push notifications
- Online status display

### Audio-Video Calls
- HD audio-video calls
- Group audio-video conferences
- Screen sharing

### Customer Service System
- Intelligent customer service bots
- Human agent handoff
- Ticket management system

### Admin Features
- User management
- Group management
- Message moderation
- Data analytics

## System Architecture

### Service Components
- **im-service**: Core instant messaging service
- **admin-service**: Admin dashboard backend
- **app-service**: Mobile API service
- **turn-service**: Audio-video relay service

### Port Configuration
- 80: IM service
- 1883: Long-connection service
- 18080: Admin port
- 8888: App service
- 3478: Audio-video service
- 8080: Admin web
- 8099: Other services

## Demo Links

### Online Demo
- **Admin Dashboard**: [https://missage-admin.nicolab.top/](https://missage-admin.nicolab.top/)
- **Service Monitoring**: [https://uptime.nicolab.top/](https://uptime.nicolab.top/)
- **Mobile App Download**: [https://fir.xcxwo.com/8qydts96](https://fir.xcxwo.com/8qydts96?release_id=68b28c7c23389f70d1212ace)

## Deployment Requirements

### Environment Requirements
- **OS**: Linux
- **Web Server**: Nginx
- **Deployment**: Docker containerization
- **Host**: Dedicated server / VPS

### Installation
- Docker deployment scripts provided
- One-click deployment supported
- Detailed deployment documentation included

## Highlights

- **Native development**: Excellent performance with a smooth user experience
- **Multi-platform support**: Android, iOS, and web admin
- **Full feature set**: Covers all core features of a modern IM application
- **Easy deployment**: Docker containerization simplifies the deployment process
- **Extensible**: Modular design makes it easy to add new features

## Use Cases

- Enterprise internal communication
- Online education platforms
- Customer service system integration
- Social app development
- In-game chat systems

---

*Missage Chat App - A professional instant messaging solution*
