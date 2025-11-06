TaskManager - React Task Management Application
A modern, responsive task management application built with React, Vite, and Tailwind CSS. This application helps users organize their tasks efficiently with a clean, intuitive interface and powerful features.

🚀 Live Demo
View Live Application
https://plp-mern-stack-development.github.io/react-js-jsx-and-css-mastering-front-end-development-WanjiruMaina15/

✨ Features
📋 Task Management
Add New Tasks - Quickly create new tasks with a simple form

Mark as Completed - Toggle task completion status

Delete Tasks - Remove tasks you no longer need

Task Filtering - View All, Active, or Completed tasks

Local Storage - Tasks persist between browser sessions

🎨 User Experience
Dark/Light Mode - Toggle between themes for comfortable viewing

Responsive Design - Works seamlessly on desktop, tablet, and mobile

Smooth Animations - Enhanced interactions with custom transitions

Clean Interface - Modern, minimalist design with Tailwind CSS

🔗 API Integration
Data Fetching - Integration with JSONPlaceholder API

Search Functionality - Filter API results in real-time

Loading States - Visual feedback during data fetching

Error Handling - Graceful error states for failed requests

🛠️ Technology Stack
Frontend Framework: React 18

Build Tool: Vite

Styling: Tailwind CSS

Routing: React Router DOM

State Management: React Hooks (useState, useEffect, useContext)

Icons: React Icons

Deployment: GitHub Pages

📦 Project Structure
text
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Custom button with variants
│   ├── Card.jsx        # Content container component
│   ├── Navbar.jsx      # Navigation header
│   └── Footer.jsx      # Site footer
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Tasks.jsx       # Task management interface
│   └── ApiDemo.jsx     # API integration demo
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js  # Local storage persistence
├── context/            # React Context providers
│   └── ThemeContext.js # Theme management
├── utils/              # Utility functions
└── App.jsx             # Main application component
🎯 Key Components
TaskManager Component
Real-time task operations (add, complete, delete)

Persistent storage using custom hooks

Advanced filtering capabilities

Theme System
Context-based theme management

Tailwind CSS dark mode integration

System preference detection

Responsive Design
Mobile-first approach

Flexible grid layouts

Optimized touch interactions

🚀 Getting Started
Prerequisites
Node.js (v14 or higher)

npm or yarn

Installation
Clone the repository:

bash
git clone <repository-url>
cd TaskManager
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open your browser and navigate to http://localhost:5173

Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build

npm run deploy - Deploy to GitHub Pages

🎨 Customization
Adding New Task Types
Extend the task structure in TaskManager.jsx to include additional fields like due dates, priorities, or categories.

Theme Colors
Modify the color scheme by updating the Tailwind configuration in tailwind.config.js.

API Endpoints
Replace the JSONPlaceholder API with your own backend by updating the endpoints in the API integration components.

🤝 Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

📝 License
This project is open source and available under the MIT License.

🙏 Acknowledgments
React - The library for web and native user interfaces

Vite - Next generation frontend tooling

Tailwind CSS - A utility-first CSS framework

JSONPlaceholder - Fake Online REST API for Testing and Prototyping

Built with ❤️ using React and Tailwind CSS

