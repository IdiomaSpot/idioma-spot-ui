import './App.scss';
import {
  AdvantagesSection,
  MainBanner,
  PromosSection,
  WhyUsSection,
} from './pages/Home';

function App() {
  return (
    <div className='App'>
      <MainBanner />
      <PromosSection />
      <AdvantagesSection />
      <WhyUsSection />
    </div>
  );
}

export default App;
