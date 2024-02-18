import './index.css';
import FirstPage from './pages/firstpage/first';
import SecondPage from './pages/secondpage/second';
import ThirdPage from './pages/thirdpage/thrid';
import FourthPage from './pages/fouthpage/fourth';
function App() {
  return (
    <div className="container mx-auto">
      <FirstPage />
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
    </div>
  );
}

export default App;
