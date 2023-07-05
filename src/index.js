import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import TagManager from 'react-gtm-module';
import ReactPixel from 'react-facebook-pixel';

const pixelOptions = {
  autoConfig: true,
  debug: false,
};

ReactPixel.init('1941976812845252', pixelOptions);
ReactPixel.pageView();

const tagManagerArgs = {
  gtmId: 'GTM-TLWMJ69'
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HelmetProvider>
     <BrowserRouter basename={ `${process.env.PUBLIC_URL}`}>
   
     <App />
   
     </BrowserRouter>
     </HelmetProvider>

  </React.StrictMode>
);


