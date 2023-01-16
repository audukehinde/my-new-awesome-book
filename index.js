import submitBook from './modules/submitBook.js';
import navButtons from './modules/navButtons.js';
import currentTime from './modules/currentTime.js';

submitBook();

// handle nav buttons
navButtons();

// Update time element every second
currentTime();
