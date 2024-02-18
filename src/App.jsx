import './index.css';
import FirstPage from './pages/firstpage/first';
import SecondPage from './pages/secondpage/second';
import ThirdPage from './pages/thirdpage/thrid';
import FourthPage from './pages/fouthpage/fourth';
import FifthPage from './pages/fifthpage/fifth';
import SixthPage from './pages/sixthpage/six';
function App() {
  return (
    <div className="container mx-auto">
      <FirstPage />
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <FifthPage/>
      <SixthPage/>
    </div>
  );
}

export default App;
