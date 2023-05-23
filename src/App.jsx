import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials, CaseStudies, Contact, Footer, Hero, Process, Services, Team , CTA} from './container';
import { Menu } from './components';




const App = () => (
  <div className="container">
    <Menu />
    <Hero />
    <Services />
    <CTA />
    <CaseStudies />
    <Process />
    <Team />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default App;
