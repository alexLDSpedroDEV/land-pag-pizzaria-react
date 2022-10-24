import './App.css';
import Header from './componentes/Header'
import SectionImg from './componentes/SectionImg';
import SectionBemVindo from './componentes/SectionBemVindo'
import SectionNossoCardapio from './componentes/SectionNossoCardapio'
import SectionHappyDay from './componentes/SectionHappyDay'
import Footer from './componentes/Footer';


function App() {


    return (
      <div className="App">
        <Header />
        <SectionImg />
        <SectionBemVindo />
        <SectionNossoCardapio />
        <SectionHappyDay />
        <Footer />
      </div>
    );
  
}

export default App;
