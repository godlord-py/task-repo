import './index.css';
import FirstPage from './pages/firstpage/first';
import SecondPage from './pages/secondpage/second';
import ThirdPage from './pages/thirdpage/thrid';
function App() {
  return (
    <div className="container mx-auto">
      <FirstPage />
      <SecondPage/>
      <ThirdPage/>
    </div>
  );
}

export default App;
