import './App.css';
import { HashRouter as Router } from "react-router-dom";
import ModernNavbar from "./components/Layout/ModernNavbar";
import Animatedroutes from "./components/Animatedroutes";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className='bg-white text-black dark:bg-black dark:text-white min-h-screen font-sans transition-colors duration-300'>
        <Router>
          <ModernNavbar />
          <Animatedroutes />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
