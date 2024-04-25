import './App.scss';
import { MainBanner, PromosSection, WhyUsSection } from './pages/Home';

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
