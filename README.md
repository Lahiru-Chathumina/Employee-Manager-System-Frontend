# Employee Manager System - Frontend

This is the frontend application for the **Employee Manager System**, built using Angular and Tailwind CSS. It allows users to add, list, search, update, and delete employees through a clean and modern interface.

## 🖥️ Features

- 🔍 Search employees by ID  
- ➕ Add new employees  
- 📝 Update employee details  
- ❌ Delete employees  
- 🌙 Dark-mode friendly design with Tailwind CSS  
- 📡 Integration with backend API

## 📁 Project Structure

src/
│
├── app/ # Contains the Angular app files
│ ├── components/ # Angular components for adding, deleting, and updating employees
│ │ ├── add-em/ # Component to add new employees
│ │ ├── delete-em/ # Component to delete employees
│ │ └── update-em/ # Component to update employee details
│ ├── model/ # TypeScript models for employee data
│ │ └── em.ts # Employee model class
│ ├── service/ # Angular services for interacting with the backend
│ │ └── employeeservice.ts # Service for API calls (get, post, delete, etc.)
│ └── env/ # Environment configuration for API URLs
│ └── env.url.ts # File to configure the backend API URL
│
└── assets/ # Static assets like images or icons (if any)

