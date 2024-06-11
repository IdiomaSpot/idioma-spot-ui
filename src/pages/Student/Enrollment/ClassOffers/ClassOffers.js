import { useDispatch, useSelector } from 'react-redux';
import Offers from '../../../../components/ui/Offers/Offers';
import { setClassType } from '../../../../context/features/enrollment/enrollmentSlice';
import { useEffectOnce } from '../../../../hooks/useEffectOnce';
import { setSelectedOffer } from '../../../../context/features/student/studentSlice';

const ClassOffers = ({ handleNext }) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student);

  function onClassOfferSelected(selectedClassOffer) {
    dispatch(setClassType({ classType: selectedClassOffer.classType }));
    handleNext();
  }

  useEffectOnce(() => {
    if (student?.selectedOffer) {
      onClassOfferSelected(student?.selectedOffer);
      dispatch(setSelectedOffer(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <>
      <Offers
        responsiveValues={{ xs: 12, sm: 12, md: 6, lg: 6 }}
        handleNext={(selectedClassOffer) =>
          onClassOfferSelected(selectedClassOffer)
        }
      />
    </>
  );
};

export default ClassOffers;
