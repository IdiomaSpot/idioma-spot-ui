import React, { useEffect, useState } from 'react';
import AdvantagesSection from './Advantages/AdvantagesSection';
import PromosSection from './Promos/PromosSection';
import MainBanner from './MainBanner/MainBanner';
import WhyUsSection from './WhyUs/WhyUsSection';
import Methodology from './Methodology/Methodology';
import MissionVision from './MissionVision/MissionVision';
import InfoFooter from './InfoFooter/InfoFooter';
import FacebookFAB from './FacebookFAB/FacebookFAB';

import { TextBlock, Offers, LoadingLogo } from '../../components/ui';
import text from '../../data/constants.json';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <LoadingLogo open={isLoading} />
      {!isLoading && (
        <>
          <MainBanner />
          <PromosSection />
          <Methodology />
          <AdvantagesSection />
          <WhyUsSection />
          <Offers />
          <TextBlock text={text['phrase']} />
          <MissionVision />
          <InfoFooter />
          <FacebookFAB />
        </>
      )}
    </>
  );
};

export default Home;
