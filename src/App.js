import './App.scss';
import {
  AdvantagesSection,
  MainBanner,
  Methodology,
  PromosSection,
  WhyUsSection,
} from './pages/Home';
import { TextBloc } from './components/ui';
import text from './data/constants.json';

function App() {
  return (
    <div className='App'>
      <MainBanner />
      <PromosSection />
      <AdvantagesSection />
      <WhyUsSection />
      <TextBloc text={text['phrase']} />
      <Methodology />
    </div>
  );
}

export default App;
