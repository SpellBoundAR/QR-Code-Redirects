const projectToken = '88be7bfc5efced7c0f631f9328d54fc2';

function sendQRScanEvent() 
{
  mixpanel.init(projectToken, { debug: true, track_pageview: false });
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  mixpanel.track('QR Scan', {
    'Code': urlParams.get('code'),
    'URL Path': window.location.pathname
  })

  console.log("QR scan event sent!")
}
