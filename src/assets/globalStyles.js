import { createGlobalStyle } from 'styled-components';
import MiradorBoldDEMO from './font/Mirador-BoldDEMO.woff';

  ;
export default createGlobalStyle`
@font-face {
  font-family: 'Mirador-BoldDEMO';
    src: local('Mirador-BoldDEMO'),
    url(${MiradorBoldDEMO}) format('woff'),
}
@media only screen and (min-width: 767px) {
  .cursor {
    z-index: 999;
    position: fixed;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: 0 0 20px #535bf2, 0 0 60px #535bf2 0 0 100px #535bf2;
    animation: colors 10s infinite;
    transform: translate(-50%, -50%);
  }

  @keyframes colors {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  .cursor:before {
    content: "";
    position: absolute;
    background: #535bf2;
    filter: blur(10px);
    width: 30px;
    height: 30px;
    opacity: 0.5;
    transform: translate(-30%, -30%);
    border-radius: 100%;
  }

}

  body{
    background-color: #dfdbe5;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }

`

