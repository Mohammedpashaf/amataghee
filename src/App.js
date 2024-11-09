import './App.css';
import './output.css';
import './custom.css';
import NavBar from './components/common/NavBar';
import MainSection from './components/MainSection';
import Footer from './components/common/Footer';
function App() {
  return (
    <div className='bg-name'>
      <NavBar></NavBar>
      <MainSection></MainSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
