
import device from "current-device";
import { detect  } from "detect-browser";
import copy from 'copy-to-clipboard';
// OR
import {
  deviceType,
  primaryInput,
  supportsPointerEvents,
  supportsTouchEvents,
  supportsPassiveEvents,
} from 'detect-it';
import './style.css';


const browser = detect();


const app = document.querySelector('#app');
app.innerHTML = `
  <ul data-info>
    <li><b>device</b>: ${device.type}</li>
    <li><b>deviceType</b>: ${deviceType}</li>
    <li><b>primaryInput</b>: ${primaryInput}</li>
    <li><b>supportsPointerEvents</b>: ${supportsPointerEvents}</li>
    <li><b>supportsTouchEvents</b>: ${supportsTouchEvents}</li>
    <li><b>supportsPassiveEvents</b>: ${supportsPassiveEvents}</li>
    <li>
      <b>User Agent:</b> 
      <div>${navigator.userAgent}</div>
    </li>
    <li>
      <div><b>Screen</b></div>
      <div>width: ${screen.width}</div>
      <div>height: ${screen.height}</div>
    </li>
  </ul>
`;

app.insertAdjacentHTML('beforeend', `
  <ul>
    <li><b>Browser</b></li>
    ${JSON.stringify(browser)}
  </ul>
`);

app.insertAdjacentHTML('beforeend', `
  <button id="copy">Copy</button>
`);

const copyBtn = document.querySelector('#copy');
copyBtn.addEventListener('click', () => {
  const info = document.querySelector('[data-info]');
  copy(info.outerHTML);
});

