const projectToken = '88be7bfc5efced7c0f631f9328d54fc2';
const debugToken = 'ecc29321aa7720470103f0b6427a8978';

function sendQRScanEvent() 
{
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const debug = urlParams.has('debug') && urlParams.get('debug').toLowerCase() === "true";

  if (debug) mixpanel.init(debugToken, { debug: true, track_pageview: false });
  else mixpanel.init(projectToken, { debug: false, track_pageview: false });
  
  mixpanel.track('QR Scan', {
    'Code': urlParams.has('code') ? urlParams.get('code') : "none",
    'Email': urlParams.has('email') ? urlParams.get('email') : "none",
    'License': urlParams.has('license') ? urlParams.get('license') : "none",
    'Variant': urlParams.has('variant') ? urlParams.get('variant') : "default",
    'URL Path': window.location.pathname
  })
}
