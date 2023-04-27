import { BackgroundDecor } from './components/BackgroundDecor/BackgroundDecor';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Intro } from './components/Intro/Intro';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Footer />
      <BackgroundDecor />
    </div>
  );
}

export default App;
