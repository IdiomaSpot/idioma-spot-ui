import './App.scss';
import {
  Difference,
  MainBanner,
  PromosSection,
  WhyUsSection,
} from './pages/Home';
import {
  Animator,
  Fade,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
} from 'react-scroll-motion';

function App() {
  const moveOut = batch(Sticky(), Fade(), MoveOut(0, -500));
  return (
    <div className='App'>
      {/*<ScrollContainer>
        <ScrollPage>
  <Animator animation={moveOut}> */}
      <MainBanner />
      {/*</Animator>
        </ScrollPage>
</ScrollContainer>*/}
      <PromosSection />
      <WhyUsSection />
    </div>
  );
}

export default App;
