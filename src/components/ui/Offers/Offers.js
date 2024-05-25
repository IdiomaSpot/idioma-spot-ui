import React from 'react';
import './Offers.scss';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import offerTypes from '../../../data/offerTypes.json';
import onlive from '../../../assets/img/onlive.jpg';
import teens from '../../../assets/img/teens.jpg';
import justSpeak from '../../../assets/img/just-speak.jpg';
import kids from '../../../assets/img/kids.jpg';

const images = {
  OnLive: onlive,
  Teens: teens,
  KIDS: kids,
  'Just-Speak': justSpeak,
};

const card = (offerType, body, image) => {
  return (
    <Card
      sx={{ width: 280, minWidth: 280, height: 450 }}
      className='card-container'
    >
      <CardActionArea>
        <CardHeader
          title={
            <Typography variant='h5'>
              IdiomaSpot{' '}
              <span className={`font-${offerType}`}>{offerType}</span>
            </Typography>
          }
        />
        <CardContent className='card-body'>
          <Typography component={'span'} variant='body2'>
            {body}
          </Typography>
        </CardContent>
        <CardMedia
          component='img'
          height='194'
          image={image.img}
          alt={image.alt}
        />
        <CardActions disableSpacing>
          <span className='text-schedule'>Ver horarios disponibles</span>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

const Offers = () => (
  <Container
    id='offers-section'
    className='offers-item-container'
    maxWidth='lg'
  >
    <Grid container spacing={1} direction='row'>
      {offerTypes.map((offer, index) => {
        const { offerType, body } = offer;
        const htmlBody = (
          <div
            className='Container text-container'
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
        );
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            display={'flex'}
            justifyContent='center'
            alignItems='center'
            key={offerType}
          >
            {card(offerType, htmlBody, {
              img: images[offerType],
              alt: offerType,
            })}
          </Grid>
        );
      })}
    </Grid>
  </Container>
);

Offers.propTypes = {};
Offers.defaultProps = {};

export default Offers;
