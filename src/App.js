import './App.css';
import Footer from './components/common/Footer';
import NavBar from './components/common/NavBar';
import MainSection from './components/MainSection';
import './custom.css';
import './output.css';
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
