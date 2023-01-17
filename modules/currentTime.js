import { DateTime } from './luxon.js';

const currentTime = () => {
  const timeEl = document.querySelector('time');

  setInterval(() => {
    const now = DateTime.now();
    timeEl.innerText = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1000);
};

export default currentTime;
