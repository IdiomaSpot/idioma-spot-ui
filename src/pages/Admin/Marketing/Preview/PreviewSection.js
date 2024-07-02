import { Box, Typography } from '@mui/material';
import { PromosSection } from '../../../Home';

const Preview = ({ campaign, preview }) => {
  return (
    <Box className='preview'>
      <Typography className='preview-title' variant='h5'>
        Vista previa:
      </Typography>
      <PromosSection
        title={campaign.title}
        text={campaign.text}
        img={preview}
        button={campaign.active}
      />
    </Box>
  );
};
export default Preview;
