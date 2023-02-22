import './App.css';
import './components/NavBar'
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import Timeline from "./components/Timeline";
import Techstack from "./components/Techstack";


function App() {
  return (
      <main className="bg-auto">
          <section className="min-h-screen">
          <NavBar/>
          <Resume/>
          <Timeline/>
          <Techstack/>
          </section>
      </main>

  );
}

export default App;
