/* webpack entry point */
import  "./form";
import "./submit";

import "../css/index.css";
/* Bootstrap's npm module uses Popper as a peer dependency. 
That means that we do not have to import Popper directly into 
our entry point because when we import Bootstrap, all the 
needed dependencies will be imported too. */
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initdb } from './database';

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

window.addEventListener('load', function () {
  initdb();
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});