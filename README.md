# E-Commerce Project with React and .NET 9

This project is a full-featured e-commerce application built using modern web technologies. It is developed with React frontend and .NET 9 backend technologies.

## 🚀 Features

- Modern and responsive user interface (React)
- RESTful API (.NET 9)
- SQLite database
- Product listing and detail viewing
- Product search and filtering
- Secure authentication and authorization
- Shopping cart management
- Order tracking

## 🛠️ Technologies

### Frontend
- React
- TypeScript
- Material-UI
- Redux Toolkit
- React Router
- Axios

### Backend
- .NET 9
- Entity Framework Core
- SQLite
- Swagger/OpenAPI
- JWT Authentication

## 📋 Prerequisites

- Node.js (v18 or higher)
- .NET 9 SDK
- Git
- Modern web browser

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/furkanozb/react-dotnet-ecommerce.git
cd react-dotnet-ecommerce
```

2. Backend setup:
```bash
cd e-commerce/API
dotnet restore
dotnet run
```

3. Frontend setup:
```bash
cd ../client
npm install
npm start
```

## 🌐 API Documentation

You can access the API documentation through Swagger UI:
```
https://localhost:7001/swagger
```

## 📁 Project Structure

```
react-dotnet-ecommerce/
├── e-commerce/
│   ├── API/                 # Backend project
│   │   ├── Controllers/     # API endpoints
│   │   ├── Data/           # Database context and configuration
│   │   ├── Entity/         # Database models
│   │   └── Migrations/     # Database migrations
│   └── client/             # Frontend project
│       ├── src/
│       │   ├── components/ # React components
│       │   ├── pages/      # Page components
│       │   └── store/      # Redux store
│       └── public/         # Static files
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Furkan Özbay - [GitHub](https://github.com/furkanozb)

Project Link: [https://github.com/furkanozb/react-dotnet-ecommerce](https://github.com/furkanozb/react-dotnet-ecommerce)
