# Dashmas
 
## 🚀 Introduction

**Dashmas** is a powerful, modular, and extensible Admin Dashboard Starter Kit designed to streamline the development of enterprise-level applications. With built-in module support, Dashmas enables developers to install, customize, and extend functionalities seamlessly, making it an ideal foundation for any business application.

### ⚠️ Development Status

Dashmas is currently in the **development phase**, and new features and improvements are being actively worked on. The system is not yet stable for production use, but we encourage early adopters and contributors to provide feedback and participate in development.

## 🎯 Features

- **Modular System** - Install and extend modules with ease.
- **User Authentication** - Secure login and role-based access control (RBAC).
- **API Integration Ready** - Easily connect with external services.
- **Responsive UI** - Optimized for both desktop and mobile devices.
- **Dark Mode** - Built-in theme support.
- **Dashboard Widgets** - Customizable widgets for quick insights.
- **Easy Customization** - Built with flexibility in mind.
- **Developer Friendly** - Clear structure and well-documented codebase.

## 🏗️ Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js / Golang&#x20;
- **Database**: PostgreSQL
- **Authentication**: JWT
- **State Management**: Redux / Zustand&#x20;

## 📦 Installation

To get started with Dashmas, follow these steps:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v20.11.1 or later)
- **Yarn** or **npm**
- **Database (PostgreSQL/MySQL/MongoDB)**

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/devmas-co-th/dashmas.git
   cd dashmas
   ```

2. Install dependencies:

   ```sh
   npm install  # or yarn install
   ```

3. Configure environment variables:

   - Copy `.env.example` to `.env` and update the necessary configurations.

   ```sh
   cp .env.example .env
   ```

4. Run the development server:

   ```sh
   npm run dev  # or yarn dev
   ```

5. Access the dashboard at:

   ```sh
   http://localhost:3000
   ```

## ⚙️ Configuration

Dashmas supports module-based development. To add a new module:

1. Create a new folder inside `modules/`.
2. Define your module’s components and routes.
3. Register the module in `modules/index.js`.

## 🔌 Available Modules

Dashmas provides a flexible module system, allowing users to extend its functionality easily. Here are some default modules:

- **User Management** (Create, Edit, Delete, Role Management)
- **Analytics Dashboard**
- **Notifications System**
- **Settings & Configurations**

## 📖 Documentation

For full documentation, visit **[Dashmas Docs](https://dashmas.devmas.co.th/docs)** *(Replace with actual documentation URL)*.

## 🛠️ Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a new branch (`feature/new-feature`)
3. Commit your changes
4. Open a Pull Request

## 📄 License

Dashmas is open-source and available under the **MIT License**. See [LICENSE](./LICENSE) for details.

## 💬 Support

For support or inquiries:

- Open an issue on [GitHub Issues](https://github.com/devmas-co-th/dashmas/issues)
- Contact us at **[support@devmas.co.th](mailto\:support@devmas.co.th)** *(Replace with actual support email)*

---

\*Developed & Maintained by \**[Devmas](https://devmas.co.th)* 🚀
