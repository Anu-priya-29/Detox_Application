# 🧘 Detox Tracker Web Application

Welcome to the **Detox Tracker**, a full-stack web application built to promote healthy screen habits through real-time detox reminders.

## 🌟 Overview

This project is designed to help users take mindful breaks from screens by tracking user data and providing scheduled detox notifications.

- ✅ Built with **React** for the frontend
- ✅ Powered by **Spring Boot** for the backend
- ✅ Uses **H2 In-Memory Database** for quick and easy testing
- ✅ Real-time **toast** and **modal** notifications for detox alerts

---

## 💻 Tech Stack

| Layer       | Technology       |
|-------------|------------------|
| Frontend    | React.js         |
| Backend     | Spring Boot (Java) |
| Database    | H2 (In-memory)   |
| Notifications | `react-toastify` & `react-modal` |

---

## 📸 Features

- ✨ Add user details: name, email, phone, and detox plan.
- 📋 View registered users instantly.
- 🔔 **Toast notifications** every 10 seconds for detox reminders.
- ⚠️ **Modal popups** every 20 seconds for stronger breaks.
- 🧪 H2 Console for live database view at [`/h2-console`](http://localhost:8080/h2-console)

---

## 🚀 Running the App

### 1. Backend (Spring Boot)
- Import the project into **STS** 
- Run `DetoxBackendApplication.java`
- H2 Console: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)

> Use JDBC URL: `jdbc:h2:mem:detoxdb`

### 2. Frontend (React)
```bash
cd frontend
npm install
npm start
React runs at: http://localhost:3000
