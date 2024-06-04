const IDIOMA_SPOT_API =
  'https://fb2f-2806-2f0-2180-21b8-d1c5-61c4-8e04-bd5d.ngrok-free.app/api';

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
