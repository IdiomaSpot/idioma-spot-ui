import './App.scss';
import {
  AdvantagesSection,
  InfoFooter,
  MainBanner,
  MenuBar,
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
      <MenuBar />
      <MainBanner />
      <PromosSection />
      <AdvantagesSection />
      <WhyUsSection />
      <TextBlock text={text['phrase']} />
      <MissionVision />
      <Methodology />
      <InfoFooter />
    </div>
  );
}

export default App;
