import './App.scss';
import { MainBanner, PromosSection, WhyUsSection, Methodology } from './pages/Home';

function App() {
  return (
    <div className='App'>
      <MainBanner />
      <PromosSection />
      <Methodology />
      <WhyUsSection />
    </div>
  );
}

export default App;
