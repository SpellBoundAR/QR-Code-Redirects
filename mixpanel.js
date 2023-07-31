const projectToken = '88be7bfc5efced7c0f631f9328d54fc2';
const debugToken = '88be7bfc5efced7c0f631f9328d54fc2';

function sendQRScanEvent() 
{
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let debug = urlParams.has('debug') && urlParams.get('debug') === true;
  console.log("DEBUG: " + debug);
  if (debug) mixpanel.init(debugToken, { debug: true, track_pageview: false });
  else mixpanel.init(projectToken, { debug: false, track_pageview: false });
  
  /*mixpanel.track('QR Scan', {
    'Code': urlParams.has('code') ? urlParams.get('code') : "none",
    'Variant': urlParams.has('variant') ? urlParams.get('variant') : "default",
    'URL Path': window.location.pathname
  })*/
}
