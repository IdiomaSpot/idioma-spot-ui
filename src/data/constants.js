const IDIOMA_SPOT_API = process.env.REACT_APP_API_URL;

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'ngrok-skip-browser-warning': true,
};

const CLASS_TYPE = {
  ONLIVE: 'ONLIVE',
  TEENS: 'TEENS',
  KIDS: 'KIDS',
  JUSTSPEAK: 'JUSTSPEAK',
};

export { HEADERS, IDIOMA_SPOT_API, CLASS_TYPE };
