const IDIOMA_SPOT_API =
  'https://bd15-2806-2f0-2180-21b8-64db-4ba2-bb0-d55f.ngrok-free.app/api';

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