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
import MenuBar from './MenuBar/MenuBar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedOffer } from '../../context/features/student/studentSlice';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleClick = (offer) => {
    dispatch(setSelectedOffer(offer));
    if (user.access_token) {
      navigate('/student/enrollment');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <LoadingLogo open={isLoading} />
      {!isLoading && (
        <>
          <MenuBar />
          <MainBanner />
          <PromosSection />
          <Methodology />
          <AdvantagesSection />
          <WhyUsSection />
          <Offers handleNext={(selectedOffer) => handleClick(selectedOffer)} />
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
