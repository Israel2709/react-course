import './App.css';
import MainHeader from './Components/MainHeader/index'
import GeneralCard from './Components/GeneralCard/index'
import Footer from './Components/Footer/index'
import DynamicText from './Components/DynamicText/index'

function App() {
  return (
    <div className="App">

      <MainHeader />
      <DynamicText/>

      <GeneralCard />
      <GeneralCard />
      <GeneralCard />
      
      <Footer/>

    </div>
  );
}

export default App;
