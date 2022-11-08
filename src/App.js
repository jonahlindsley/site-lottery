import Header from './components/Header/Header'
import ColorScheme from './components/ColorScheme/ColorScheme'
import Headers from './components/Headers/Headers'
import Subjects from './components/Subjects/Subjects'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'> 
      <h1>Welcome to the website lottery, a place for the uncertan programmer!</h1>
      <h2>Have you ever found yourself wanting to follow JD's advice and keep making websites for practice but for the life of you you can't think of a single idea of what to make? me too! so I made a website to tell all us uncertain baby programmers what to make so we don't have to waste our caffine high thinking of decent idea's of what to make a website about and we can focus on the important things in life like "why won't that damn div move 5 more pixels to the left!?"</h2>
      <Headers />
      <ColorScheme />
      <Subjects />
      </div>
    </div>
  );
}

export default App;
