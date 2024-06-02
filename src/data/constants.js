const IDIOMA_SPOT_API =
  'https://b12f-2806-269-4480-3b9-ac1c-22b-2788-2160.ngrok-free.app/api';

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'ngrok-skip-browser-warning': true,
};

const CLASS_TYPE = {
  ONLIVE: "ONLIVE",
  TEENS: "TEENS",
  KIDS: "KIDS",
  JUSTSPEAK: "JUSTSPEAK",
}

export { HEADERS, IDIOMA_SPOT_API, CLASS_TYPE };