# PetCare Market - Frontend

React-based frontend for PetCare Market, a full-stack e-commerce application for pet products.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: CSS (with plans for Tailwind CSS)
- **State Management**: React Context / Redux (planned)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd petcare-market-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

### Running the App

**Development mode:**
```bash
npm run dev
```

The app will start on `http://localhost:3000`.

**Production build:**
```bash
npm run build
npm run preview
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## Project Structure

```
petcare-market-frontend/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── redux/           # Redux store (planned)
│   ├── services/        # API services
│   ├── routes/          # Route components
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

## Proxy Configuration

The Vite dev server is configured to proxy `/api` requests to the backend server at `http://localhost:5000`.

## License

ISC
