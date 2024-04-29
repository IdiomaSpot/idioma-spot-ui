import './App.scss';
import {
  AdvantagesSection,
  MainBanner,
  Methodology,
  MissionVision,
  PromosSection,
  WhyUsSection,
} from './pages/Home';
import { TextBlock } from './components/ui';
import text from './data/constants.json';

function App() {
  return (
    <div className='App'>
      <MainBanner />
      <PromosSection />
      <AdvantagesSection />
      <WhyUsSection />
      <TextBlock text={text['phrase']} />
      <MissionVision />
      <Methodology />
    </div>
  );
}

export default App;
