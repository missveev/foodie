import Nav from './component/nav';
import Hero from './component/hero';
import Service from './component/service';

import './App.css';
import About from './component/about';
import Work from './component/work';
import Menu from './component/menu';
import Testimonial from './component/testimonial';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Hero/>
     <Service/>
     <About/>
     <Work/>
     <Menu/>
     <Testimonial/>
     <Footer/>
     
    </div>
  );
}

export default App;
