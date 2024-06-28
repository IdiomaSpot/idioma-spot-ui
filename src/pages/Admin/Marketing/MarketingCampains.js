import './MarketingCampains.scss';
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
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import PromosSection from '../../Home/Promos/PromosSection';
import { DropzoneArea } from 'mui-file-dropzone';
import { useEffect, useState } from 'react';
import useAdminRequest from '../../../hooks/useAdminRequest';
import { LoadingPage, Notification } from '../../../components/ui';

const MarketingCampains = () => {
  const [file, setFile] = useState();
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [missingField, setMissingField] = useState({
    file: false,
    title: false,
    text: false,
  });
  const [{ data, isLoading, hasError }, setPostRequest] = useAdminRequest();
  const [
    { data: currentCampain, isLoading: loadingGet, hasError: errorGet },
    setGetRequest,
  ] = useAdminRequest();
  const dispatch = useDispatch();
  const [preview, setPreview] = useState();

  useEffectOnce(() => {
    dispatch(changeContent(getMenuOption('marketing')));
    setGetRequest({
      type: 'get-campain',
    });
  });

  useEffect(() => {
    if (currentCampain?.length > 0) {
      setTitle(currentCampain[0]?.title);
      setText(currentCampain[0]?.description);
      setFile(currentCampain[0]?.image);
      setActive(currentCampain[0]?.enableSignUpButton);
    }
  }, [currentCampain]);

  useEffect(() => {
    if (!hasError && data) {
      setOpen(true);
    }
  }, [data, hasError]);

  const handleFileChange = (files) => {
    if (files.length > 0) {
      setFile(files[0]);
      const fileURL = URL.createObjectURL(files[0]);
      setPreview(fileURL);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === 'title') {
      setTitle(event.target.value);
    } else {
      setText(event.target.value);
    }
  };

  const updateMissingField = (field, condition) => {
    setMissingField((fields) => ({
      ...fields,
      [field]: condition,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMissingField('file', !file);
    updateMissingField('title', !title?.length);
    updateMissingField('text', !text?.length);

    if (Object.values(missingField).some((value) => value === true)) {
      return;
    }

    setPostRequest({
      type: 'save-campain',
      data: {
        image: file,
        title: title,
        description: text,
        enableSignUpButton: active,
      },
    });
  };

  const handleDeleteFile = () => {
    setFile(null);
    setPreview(null);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container className='marketing-campains'>
      {(isLoading || loadingGet) && (
        <LoadingPage openOn={isLoading || loadingGet} />
      )}
      <Notification
        type={hasError || errorGet ? 'error' : data ? 'success' : ''}
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
              value={title}
              onChange={handleChange}
            />
            <FormGroup>
              <FormLabel component='legend'>Botón de registro</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={active}
                    onChange={(event) => {
                      setActive(event.target.checked);
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label={active ? 'activo' : 'inactivo'}
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
                inputProps={{ maxLength: 500 }}
                value={text}
                onChange={handleChange}
              />
            }
          </Grid>
          <Grid item xs={12} md={4} className='edit-drop space'>
            <Alert variant='outlined' severity='warning'>
              Tamaño máximo: 500 x 500 2MB
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
          <Grid item xs={12} className='save'>
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box className='preview'>
        <Typography className='preview-title' variant='h5'>
          Vista previa:
        </Typography>
        <PromosSection
          title={title}
          text={text}
          img={preview}
          button={active}
        />
      </Box>
    </Container>
  );
};

export default MarketingCampains;
