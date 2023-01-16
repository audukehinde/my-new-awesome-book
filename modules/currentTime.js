import { DateTime } from './luxon.js';

function currentTime() {
  const timeEl = document.querySelector('time');

  setInterval(() => {
    const now = DateTime.now();
    timeEl.innerText = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1000);
}

// eslint-disable-next-line import/prefer-default-export
export { currentTime };
