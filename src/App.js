import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import './App.css';
import MainSection from './components/MainSection';
import SecondPage from './components/SecondPage';
import './custom.css';
import './output.css';


function App() {
  return (
    <div className='bg-name'>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSection />}></Route>
          <Route path="SecondPage" element={<SecondPage />} />
          <Route path="MainSection" element={<MainSection />} />
          <Route path="*" element={<MainSection />} />
          
        </Routes>
      </BrowserRouter>
      <div >
        <Outlet/>
        {/* <MainSection></MainSection> */}
        {/* <SecondPage></SecondPage> */}
      </div>
    </div>
  );
}

export default App;
