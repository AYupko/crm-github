# GitHub CRM

## 📄 Description

GitHub CRM is a full-stack web application that allows users to authenticate, connect GitHub repositories, and manage their saved repositories and repository statistics in one place. The project is built with a modular architecture following the Feature-Sliced Design (FSD) methodology to ensure scalability and maintainability.

## ✨ Features Implemented

- User authentication (sign up, sign in, sign out)
- Cookie-based session management
- Backend API built with Fastify, Zod, and Prisma
- PostgreSQL database integration
- Project management and GitHub repository import
- Modular frontend architecture with FSD structure
- React Query setup for frontend data fetching

## 🧰 Tech Stack

### Frontend
- React + Vite + TypeScript
- React Router DOM
- Axios + React Query
- Modular CSS

### Backend
- Fastify
- Zod (schema validation)
- Prisma ORM
- PostgreSQL
- Docker

## 🐳 Run with Docker

1. Clone the repository
```bash
git clone https://github.com/AYupko/crm-github.git
cd crm-github
```

2. In Backend folder create your `.env` based on `.env.example` file.

3. Build and start with Docker Compose:
```bash
docker-compose up --build
```

4. Access the frontend at `http://localhost:8080` and backend at `http://localhost:3000`

## API Overview

### Auth

- `POST /api/auth/sign-up` – Register a new user
- `POST /api/auth/sign-in` – Sign in and receive auth cookies
- `POST /api/auth/logout` – Clear auth cookies

### Projects

- `POST /api/projects` – Add new GitHub project
- `GET /api/projects` – Fetch all user projects
- `DELETE /api/projects/:id` – Delete single project
- `PUT /api/projects/:id` – Update project details

## 🚀 Future Improvements

- ⏳ OAuth integration with GitHub for automatic repo sync
- 🔍 Project search and filtering
- 🧪 Integration testing for API endpoints
