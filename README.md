# 💬 Real-Time Chat Application

A full-stack real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring Socket.IO for instant messaging, JWT authentication, and modern UI design.

## 🚀 Live Demo

- **Frontend**: [Deployed on Vercel](https://your-vercel-url.vercel.app)
- **Backend**: [Deployed on Render](https://chat-application-using-mern-8077.onrender.com)

## ✨ Features

### 🔐 Authentication & Security
- User registration and login with email validation
- JWT token-based authentication with HTTP-only cookies
- Password hashing using bcrypt
- Protected routes and middleware
- Cross-origin cookie support for deployed environments

### 💬 Real-Time Messaging
- Instant messaging with Socket.IO
- Real-time message delivery and updates
- Online user status indicators
- Message history persistence
- Conversation management

### 🎨 Modern UI/UX
- Responsive design with Tailwind CSS
- Clean and intuitive chat interface
- Loading states and error handling
- Toast notifications for user feedback
- Mobile-friendly design

### 🔧 Technical Features
- RESTful API architecture
- Real-time communication with WebSockets
- State management with Zustand
- Form handling with React Hook Form
- Audio notifications for new messages
- Environment-based configuration

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - User interface library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS components
- **Socket.IO Client** - Real-time communication
- **Axios** - HTTP client
- **Zustand** - State management
- **React Hook Form** - Form management
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Socket.IO** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie parsing middleware

## 🏗️ Project Structure

```
Chat App/
├── backend/
│   ├── controller/
│   │   ├── message.controller.js
│   │   └── user.controller.js
│   ├── jwt/
│   │   └── genToken.js
│   ├── middleware/
│   │   └── secureRoute.js
│   ├── models/
│   │   ├── conversation.model.js
│   │   ├── message.model.js
│   │   └── user.model.js
│   ├── route/
│   │   ├── message.route.js
│   │   └── user.route.js
│   ├── socketio/
│   │   └── server.js
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Left/
│   │   │   ├── Right/
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   └── loading/
│   │   ├── store/
│   │   │   ├── AuthProvider.js
│   │   │   ├── Socket-context.js
│   │   │   ├── getAllUsers.js
│   │   │   ├── getMessages.js
│   │   │   └── sendMessages.js
│   │   ├── states/
│   │   │   └── useConversation.js
│   │   ├── media/
│   │   │   └── chat-notification-sound.mp3
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/chat-application-mern.git
   cd chat-application-mern
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

#### Backend (.env)
```env
MONGODB_URI=your_mongodb_connection_string
JWT_TOKEN=your_jwt_secret_key
PORT=5002
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

#### Frontend (.env)
```env
REACT_APP_BACKEND_URL=http://localhost:5002
```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```

3. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5002

## 🌐 Deployment

### Backend Deployment (Render)

1. **Environment Variables on Render:**
   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_TOKEN=your_jwt_secret_key
   NODE_ENV=production
   FRONTEND_URL=https://your-vercel-app-url.vercel.app
   PORT=5002
   ```

2. **Deploy Command:**
   ```bash
   npm start
   ```

### Frontend Deployment (Vercel)

1. **Environment Variables on Vercel:**
   ```env
   REACT_APP_BACKEND_URL=https://chat-application-using-mern-8077.onrender.com
   ```

2. **Build Command:**
   ```bash
   npm run build
   ```

## 📡 API Endpoints

### Authentication
- `POST /user/signup` - User registration
- `POST /user/login` - User login
- `POST /user/logout` - User logout

### Users
- `GET /user/getUser` - Get all users (authenticated)

### Messages
- `GET /message/get/:id` - Get conversation messages
- `POST /message/send/:id` - Send a message

## 🔌 Socket Events

### Client to Server
- `connection` - User connects to chat
- `disconnect` - User disconnects from chat

### Server to Client
- `online` - Broadcast online users list
- `newMessage` - Real-time message delivery

## 🎯 Key Features Implementation

### Real-Time Messaging
- Socket.IO integration for instant communication
- Message persistence in MongoDB
- Online user tracking
- Automatic message updates

### Authentication Flow
- JWT token generation on login/signup
- HTTP-only cookies for security
- Protected routes with middleware
- Automatic token verification

### Cross-Origin Configuration
- CORS setup for frontend-backend communication
- Cookie settings for cross-domain deployment
- Environment-specific configurations

## 🔧 Development Tips

### Local Development
```bash
# Run both frontend and backend simultaneously
npm run dev  # in backend directory
npm start    # in frontend directory
```

### Production Considerations
- Set `NODE_ENV=production` for backend
- Configure CORS with actual frontend URL
- Use HTTPS for secure cookie transmission
- Set proper `sameSite` cookie attributes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Debasish Sarkar**
- GitHub: https://github.com/Deba-004

## 🙏 Acknowledgments

- Socket.IO for real-time communication
- MongoDB for database solutions
- Tailwind CSS for styling
- React community for excellent libraries

---

⭐ **Star this repository if you found it helpful!**
