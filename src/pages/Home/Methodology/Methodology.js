import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import './Methodology.scss';
import methodology from '../../../data/methodology.json';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupIcon from '@mui/icons-material/Group';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Box, Container } from '@mui/material';

const MethodologyItem = ({ icon, title, description }) => {
  return (
    <>
      <Grid item xs={3} md={1}>
        <span className='icon'>{icon}</span>
      </Grid>
      <Grid item xs={7} md={2}>
        <Box direction='column' className='methodology-text'>
          <Grid item>
            <h2 className='text-title text'>{title}</h2>
          </Grid>
          <Grid item>
            <span className='text'>{description}</span>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

MethodologyItem.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function Methodology() {
  const titles = Object.keys(methodology);
  const icons = [
    <CampaignIcon fontSize='large' />,
    <GroupIcon fontSize='large' />,
    <FamilyRestroomIcon fontSize='large' />,
    <LocalLibraryIcon fontSize='large' />,
  ];
  return (
    <>
      <Container
        id='methodology-section'
        className='methodology-section'
        maxWidth='lg'
      >
        <h1>METODOLOGIA IDIOMA SPOT</h1>
        <Box component={Grid} container className='methodology-content'>
          {titles.map((title, index) => (
            <MethodologyItem
              icon={icons[index]}
              description={methodology[title]}
              title={title}
              key={title}
            />
          ))}
        </Box>
      </Container>
    </>
  );
}
