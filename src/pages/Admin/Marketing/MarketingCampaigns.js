import './MarketingCampaigns.scss';
import { useEffectOnce } from '../../../hooks/useEffectOnce';
import { useDispatch } from 'react-redux';
import { changeContent } from '../../../context/features/admin/adminSlice';
import { getMenuOption } from '../../../data/adminMenu';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  Fab,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { DropzoneArea } from 'mui-file-dropzone';
import { useCallback, useEffect, useState } from 'react';
import useAdminRequest from '../../../hooks/useAdminRequest';
import { LoadingPage, Notification } from '../../../components/ui';
import Preview from './Preview/PreviewSection';

const MarketingCampaigns = () => {
  const [campaign, setCampaign] = useState({
    campaignId: '',
    file: null,
    active: false,
    title: '',
    text: '',
  });
  const [missingField, setMissingField] = useState({
    file: false,
    title: false,
    text: false,
  });
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState();

  const [{ data, isLoading, hasError }, setPostRequest] = useAdminRequest();
  const [
    { data: currentCampaign, isLoading: loadingGet, hasError: errorGet },
    setGetRequest,
  ] = useAdminRequest();
  const [
    { data: dataDelete, isLoading: loadingDelete, hasError: errorDelete },
    setDeleteRequest,
  ] = useAdminRequest();
  const dispatch = useDispatch();

  useEffectOnce(() => {
    dispatch(changeContent(getMenuOption('marketing')));
    setGetRequest({
      type: 'get-campaign',
    });
  });

  useEffect(() => {
    if (currentCampaign?.length > 0) {
      const { id, title, description, image, enableSignUpButton } =
        currentCampaign[0];

      setCampaign({
        campaignId: id,
        file: image,
        active: enableSignUpButton,
        title: title,
        text: description,
      });
      setPreview(image);
    }
  }, [currentCampaign]);

  useEffect(() => {
    if (!hasError && data) {
      setOpen(true);
    }
  }, [data, hasError]);

  useEffect(() => {
    if (!errorDelete && dataDelete) {
      setCampaign({
        campaignId: '',
        file: null,
        active: false,
        title: '',
        text: '',
      });
      setPreview(null);
      setOpen(true);
    }
  }, [errorDelete, dataDelete]);

  const handleCampaignChange = useCallback((field, value) => {
    setCampaign((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }, []);

  const handleFileChange = useCallback(
    (files) => {
      if (files.length > 0) {
        handleCampaignChange('file', files[0]);
        const fileURL = URL.createObjectURL(files[0]);
        setPreview(fileURL);
      }
    },
    [handleCampaignChange]
  );

  const handleChange = useCallback(
    (event) => {
      handleCampaignChange(event.target.name, event.target.value);
    },
    [handleCampaignChange]
  );

  const updateMissingField = (field, condition) => {
    setMissingField((fields) => ({
      ...fields,
      [field]: condition,
    }));
  };

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const { file, title, text, active } = campaign;
      updateMissingField('file', !file);
      updateMissingField('title', !title?.length);
      updateMissingField('text', !text?.length);

      if (Object.values(missingField).some((value) => value === true)) {
        return;
      }

      setPostRequest({
        type: 'save-campaign',
        data: {
          image: file,
          title: title,
          description: text,
          enableSignUpButton: active,
        },
      });
    },
    [campaign, missingField, setPostRequest]
  );

  const handleDeleteCampaign = useCallback(
    (event) => {
      event.preventDefault();
      const { campaignId } = campaign;
      if (campaignId) {
        setDeleteRequest({ type: 'delete-campaign', campaignId });
      }
    },
    [campaign, setDeleteRequest]
  );

  const handleDeleteFile = () => {
    handleCampaignChange('file', null);
    setPreview(null);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container className='marketing-campaigns'>
      {(isLoading || loadingGet || loadingDelete) && (
        <LoadingPage openOn={isLoading || loadingGet || loadingDelete} />
      )}
      <Notification
        type={
          hasError || errorGet || errorDelete
            ? 'error'
            : data || dataDelete
            ? 'success'
            : ''
        }
        open={open}
        onClose={handleClose}
      />
      <Box
        className='edit'
        component='form'
        onSubmit={handleSubmit}
        autoComplete='off'
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} className='edit-title space'>
            <TextField
              error={missingField?.title}
              margin='normal'
              required
              fullWidth
              id='title'
              label='Título de campaña'
              name='title'
              autoFocus
              variant='outlined'
              inputProps={{ maxLength: 100 }}
              value={campaign.title}
              onChange={handleChange}
            />
            <FormGroup>
              <FormLabel component='legend'>Botón de registro</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={campaign.active}
                    onChange={(event) => {
                      handleCampaignChange('active', event.target.checked);
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label={campaign.active ? 'activo' : 'inactivo'}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={4}>
            {
              <TextField
                id='text'
                label='Texto de campaña'
                name='text'
                multiline
                rows={12}
                error={missingField?.text}
                margin='normal'
                required
                fullWidth
                inputProps={{ maxLength: 800 }}
                value={campaign.text}
                onChange={handleChange}
              />
            }
          </Grid>
          <Grid item xs={12} md={4} className='edit-drop space'>
            <Alert variant='outlined' severity='warning'>
              Tamaño máximo: 800 x 800 2MB
            </Alert>
            <div className='drop-area'>
              <DropzoneArea
                onChange={handleFileChange}
                acceptedFiles={['image/*']}
                maxFileSize={2097152}
                showPreviews={true}
                filesLimit={1}
                dropzoneText={'Haz click en el recuadro o arrastra una imagen'}
                showPreviewsInDropzone={false}
                onDelete={handleDeleteFile}
              />
            </div>

            {missingField?.file && (
              <Alert variant='outlined' severity='error'>
                Sube una imagen
              </Alert>
            )}
          </Grid>
          <Grid
            component={Grid}
            item
            xs={6}
            sx={{ display: { xs: 'block', md: 'none' } }}
            className='save-btn'
          >
            <Fab
              type='submit'
              aria-label='submit'
              variant='contained'
              size='large'
              color='primary'
            >
              <SaveIcon fontSize='large' />
            </Fab>
          </Grid>
          <Grid
            component={Grid}
            item
            xs={6}
            sx={{ display: { xs: 'none', md: 'block' } }}
            className='save'
          >
            <Button
              type='submit'
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              startIcon={<SaveIcon />}
            >
              Guardar
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            className='delete-btn'
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <Fab
              aria-label='delete'
              variant='contained'
              onClick={handleDeleteCampaign}
              color='error'
              size='large'
            >
              <DeleteIcon fontSize='large' />
            </Fab>
          </Grid>
          <Grid
            component={Grid}
            item
            xs={6}
            sx={{ display: { xs: 'none', md: 'block' } }}
            className='delete'
          >
            <Button
              type='delete'
              variant='contained'
              color='error'
              sx={{ mt: 3, mb: 2 }}
              startIcon={<DeleteIcon />}
              onClick={handleDeleteCampaign}
            >
              Borrar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Preview campaign={campaign} preview={preview} />
    </Container>
  );
};

export default MarketingCampaigns;
