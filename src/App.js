import './App.scss';
import { Difference, MainBanner, PromosSection } from './pages/Home';

function App() {
  return (
    <div className='App'>
      {/*<header className='App-header'> </header> */}
      <MainBanner></MainBanner>
      <Difference></Difference>
      <PromosSection></PromosSection>
    </div>
  );
}

export default App;
