import React from 'react';
import './Grades.scss';
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
import gradeTypes from '../../../data/gradeTypes.json';
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

const card = (gradeType, body, image) => {
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
              <span className={`font-${gradeType}`}>{gradeType}</span>
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

const Grades = () => (
  <Container className='grades-item-container' maxWidth='lg'>
    <Grid container spacing={1} direction='row'>
      {gradeTypes.map((grade, index) => {
        const { gradeType, body } = grade;
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
            key={gradeType}
          >
            {card(gradeType, htmlBody, {
              img: images[gradeType],
              alt: gradeType,
            })}
          </Grid>
        );
      })}
    </Grid>
  </Container>
);

Grades.propTypes = {};
Grades.defaultProps = {};

export default Grades;
