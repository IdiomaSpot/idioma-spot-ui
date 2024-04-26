import './App.scss';
import { MainBanner, PromosSection, WhyUsSection } from './pages/Home';
import { TextBloc } from './components/ui';
import text from './data/constants.json';

function App() {
  return (
    <div className='App'>
      <MainBanner />
      <PromosSection />

      <WhyUsSection />
      <TextBloc text={text['phrase']} />
    </div>
  );
}

export default App;
