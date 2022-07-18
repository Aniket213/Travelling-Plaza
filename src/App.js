import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import Populardestinations from './components/Populardestinations';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Dig from './components/Dig';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'animate.css';    

function App() {
  const modebtn = ()=>{
    console.log("clicked");
    const app = document.querySelector('.app');
    if(app.classList.contains('lightmode')){
        app.classList.remove('lightmode');
        app.classList.add('darkmode');
    }else{
        app.classList.add('lightmode');
        app.classList.remove('darkmode');
    }
  }

  return (
    <div className="app lightmode">
      <Nav modebtn = {modebtn}/>
      <Home/>
      <Chatbot/>
      <Services/>
      <Showcase/>
      <Populardestinations/>
      <Dig/>
      <Team/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
