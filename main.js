
import device from "current-device";
import { detect  } from "detect-browser";
import copy from 'copy-to-clipboard';
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



const infoHTML = () => {
  return `
  <ul data-info>
    <li><b>device</b>: ${device.type}</li>
    <li><b>deviceType</b>: ${deviceType}</li>
    <li><b>primaryInput</b>: ${primaryInput}</li>
    <li><b>supportsPointerEvents</b>: ${supportsPointerEvents}</li>
    <li><b>supportsTouchEvents</b>: ${supportsTouchEvents}</li>
    <li><b>supportsPassiveEvents</b>: ${supportsPassiveEvents}</li>
    <li><br></li>
    <li><b>primaryPointerFine</b>: ${window.matchMedia("(pointer: fine)").matches}</li>
    <li><b>anyPointerFine</b>: ${window.matchMedia("(any-pointer: fine)").matches}</li>
    <li><b>primaryPointerCoarse</b>: ${window.matchMedia("(pointer: coarse)").matches}</li>
    <li><b>anyPointerCoarse</b>: ${window.matchMedia("(any-pointer: coarse)").matches}</li>
    <li><br></li>
    <li><b>primaryHover</b>: ${window.matchMedia("(hover: hover)").matches}</li>
    <li><b>anyHover</b>: ${window.matchMedia("(any-hover: hover)").matches}</li>
    <li><b>primaryHoverNone</b>: ${window.matchMedia("(hover: none)").matches}</li>
    <li><b>anyHoverNone</b>: ${window.matchMedia("(any-hover: none)").matches}</li>
    <li><br></li>
    <li><b>pointerEventInWindow</b>: ${"PointerEvent"in window}</li>
    <li><b>maxTouchPoints</b>: ${"".concat(window.navigator.maxTouchPoints)}</li>
    <li><b>onTouchStartInWindow</b>: ${"ontouchstart"in window}</li>
    <li><b>touchEventInWindow</b>: ${"TouchEvent"in window}</li>
    <li><br></li>
    <li>
      <b>User Agent:</b> 
      <div>${navigator.userAgent}</div>
    </li>
    <li>
      <div><b>Screen</b></div>
      <div>width: ${screen.width}</div>
      <div>height: ${screen.height}</div>
      <div>Inner Height: ${window.innerHeight}</div>
      <div>Inner Width: ${window.innerWidth}</div>
      <div>pixel ratio: ${window.devicePixelRatio}</div>
      <div>Width no scaling ${window.innerWidth * window.devicePixelRatio}</div>
      <div>Height no scaling ${window.innerHeight * window.devicePixelRatio}</div>
      <div>${JSON.stringify({
        availHeight: window.screen.availHeight,
        availLeft: window.screen.availLeft,
        availTop: window.screen.availTop,
        availWidth: window.screen.availWidth,
        colorDepth: window.screen.colorDepth,
        height: window.screen.height,
        isExtended: window.screen.isExtended,
        orientation: window.screen.orientation,
        pixelDepth: window.screen.pixelDepth,
        width: window.screen.width,
      })}</div>
    </li>
    <li><b>Browser</b></li>
    <li>${JSON.stringify(browser)}</li>
  </ul>
`
};
app.innerHTML = infoHTML();


window.addEventListener('resize', () => {
  const info = document.querySelector('[data-info]');
  info.innerHTML = infoHTML();
});

app.insertAdjacentHTML('beforeend', `
  <button id="copy">Copy</button>
`);

const copyBtn = document.querySelector('#copy');
copyBtn.addEventListener('click', () => {
  const info = document.querySelector('[data-info]');
  copy(info.outerHTML);
});




