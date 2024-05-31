import * as React from 'react';
import { useDispatch } from 'react-redux';
import Offers from '../../../../components/ui/Offers/Offers'
import { setClassType } from '../../../../context/features/enrollment/enrollmentSlice';

const ClassOffers = ({ handleNext }) => {
    const dispatch = useDispatch();

    function onClassOfferSelected(selectedClassOffer) {
        dispatch(setClassType({ classType: selectedClassOffer.classType }));
        handleNext();
    }

    return <>
        <Offers
            responsiveValues={{ xs: 12, sm: 12, md: 6, lg: 6 }}
            handleNext={(selectedClassOffer) => onClassOfferSelected(selectedClassOffer)}
        />
    </>

}

export default ClassOffers;
