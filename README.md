# Todo Today

A modern, responsive todo application built with React, TypeScript, and Tailwind CSS. Features drag-and-drop functionality, dark/light theme support, and local storage persistence.

![Todo Today App](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.10-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)

## 🌟 Features

- **Task Management**: Add, delete, and mark tasks as complete
- **Drag & Drop**: Reorder tasks using intuitive drag-and-drop functionality
- **Dark/Light Theme**: Toggle between dark and light themes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Local Storage**: Tasks persist between browser sessions
- **Modern UI**: Clean, minimalist interface with smooth animations
- **Keyboard Support**: Add tasks using the Enter key
- **Auto-cleanup**: Completed tasks are automatically removed after animation

## 🚀 Live Demo

Visit the live application: [Todo Today](https://belborba.github.io/react-to-do-today/)

## 🛠️ Technologies Used

- **React 19.1.0** - UI library
- **TypeScript 5.8.3** - Type safety
- **Tailwind CSS 4.1.10** - Styling
- **Vite 6.3.5** - Build tool and dev server
- **@dnd-kit** - Drag and drop functionality
- **UUID** - Unique ID generation
- **GH Pages** - Deployment

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/belborba/react-to-do-today.git
   cd todo-today
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🎯 Usage

### Adding Tasks

- Type your task in the input field
- Press Enter or click the "+" button to add the task

### Managing Tasks

- **Complete a task**: Click the checkbox to mark as done
- **Delete a task**: Click the trash icon to remove the task
- **Reorder tasks**: Drag and drop tasks to change their order

### Theme Toggle

- Click the theme button in the header to switch between dark and light modes

### Local Date

- The current date is displayed in the header

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header/           # App header with logo, theme toggle, and date
│   ├── TaskInput/        # Task input component
│   └── TaskList/         # Task list with drag-and-drop
├── contexts/
│   ├── TaskContext.tsx   # Task state management
│   └── ThemeContext.tsx  # Theme state management
├── pages/
│   └── Main/            # Main application page
├── types/
│   └── task.d.ts        # TypeScript type definitions
└── assets/
    ├── icons/           # SVG icons
    └── images/          # App images and logos
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Key Features Implementation

### Drag & Drop

Uses `@dnd-kit` library for smooth drag-and-drop functionality with touch and mouse support.

### Theme System

Implements a context-based theme system with localStorage persistence.

### Task Persistence

Tasks are automatically saved to localStorage and restored on page reload.

### Responsive Design

Built with Tailwind CSS for a fully responsive experience across all devices.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👩🏻‍💻 Author

**Bel Borba - Front End Developer**

⭐ If you found this project helpful, please give it a star!
