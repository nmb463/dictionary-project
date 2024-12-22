import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Definition Please!</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Nicole Banda and <a href="https://github.com/nmb463/dictionary-project.git" target="_blank">open-sourced on GitHub</a></small>
        </footer>
      </div>
    </div>
  );
}

