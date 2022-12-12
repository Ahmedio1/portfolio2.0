import logo from './logo.svg';
import './App.css';
import './components/NavBar'
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";

function App() {
  return (
      <main className="bg-auto">
          <section className="min-h-screen">
          <NavBar/>
          <Resume/>
          </section>
      </main>

  );
}

export default App;
