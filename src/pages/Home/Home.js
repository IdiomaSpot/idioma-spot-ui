import React from 'react';
import AdvantagesSection from './Advantages/AdvantagesSection';
import PromosSection from './Promos/PromosSection';
import MainBanner from './MainBanner/MainBanner';
import WhyUsSection from './WhyUs/WhyUsSection';
import Methodology from './Methodology/Methodology';
import MissionVision from './MissionVision/MissionVision';
import InfoFooter from './InfoFooter/InfoFooter';
import FacebookFAB from './FacebookFAB/FacebookFAB';

import { TextBlock, Grades } from '../../components/ui';
import text from '../../data/constants.json';

const Home = () => (
  <>
    <MainBanner />
    <PromosSection />
    <Methodology />
    <AdvantagesSection />
    <WhyUsSection />
    <Grades />
    <TextBlock text={text['phrase']} />
    <MissionVision />
    <InfoFooter />
    <FacebookFAB />
  </>
);

export default Home;
