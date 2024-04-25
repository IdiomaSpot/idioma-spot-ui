import './App.scss';
import { MainBanner, PromosSection, WhyUsSection } from './pages/Home';

function App() {
  return (
    <div className='App'>
      <MainBanner />
      <PromosSection />

      <WhyUsSection />
    </div>
  );
}

export default App;
