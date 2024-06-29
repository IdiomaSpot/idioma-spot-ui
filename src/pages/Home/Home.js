import { useEffect, useState } from 'react';
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
import { useEffectOnce } from '../../hooks/useEffectOnce';
import useAdminRequest from '../../hooks/useAdminRequest';
import './Home.scss';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [{ data: responseGet, isLoading: loadingGet }, setGetRequest] =
    useAdminRequest();
  const [currentCampaign, setCurrentCampaign] = useState(true);

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

  //#region Promos
  useEffect(() => {
    if (responseGet?.length > 0) {
      setCurrentCampaign(responseGet[0]);
    }
  }, [responseGet]);

  useEffectOnce(() => {
    setGetRequest({
      type: 'get-campain',
    });
  });
  //#endregion

  return (
    <div className="home">
      <LoadingLogo open={isLoading || loadingGet} />
      {!isLoading && (
        <>
          <MenuBar />
          <MainBanner />
          {currentCampaign && (
            <PromosSection
              button={currentCampaign.enableenableSignUpButton}
              img={currentCampaign.image}
              text={currentCampaign.description}
              title={currentCampaign.title}
            />
          )}
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
    </div>
  );
};

export default Home;
