import './App.css';
import Listings from './components/Listings'

function App() {
  return (
   <div className="page">
    <header>
    <h1>AI Horrors</h1>
    <h2>The best AI fails</h2>
    
  </header>
  <div className="container">

  <main>
    <Listings />
  </main>
  <footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
  </footer>
</div>
</div>
  );
}

export default App;
