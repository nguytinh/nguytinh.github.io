import './App.css';
import { HashRouter as Router } from "react-router-dom";
import ModernNavbar from "./components/Layout/ModernNavbar";
import Animatedroutes from "./components/Animatedroutes";

function App() {
  return (
    <div className='bg-slate-900 text-white min-h-screen font-sans'>
      <Router>
        <ModernNavbar />
        <Animatedroutes />
      </Router>
    </div>
  );
}

export default App;
