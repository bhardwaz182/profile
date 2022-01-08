import Experiences from './components/experiences';
import Home from './components/home';
import Profile from './components/profile';
import Abilities from './components/abilities';
import Projects from './components/projects';
import Contact from './components/contact';
import './styles/common.css';
function App() {
  return (
    <div>
      <Home/> 
      <Profile/>
      <Experiences/>
      <Abilities/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
