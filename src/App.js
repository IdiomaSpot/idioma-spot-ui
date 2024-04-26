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
      <Methodology />
      <WhyUsSection />
      <TextBloc text={text['phrase']} />
    </div>
  );
}

export default App;
