function redirectToSpellBoundAppStore()
{
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    window.location.href = "https://play.google.com/store/apps/details?id=com.getspellboundbooks.spellbound&hl=en_US&gl=US";
  }
  
  // Android
  else if (/android/i.test(userAgent)) {
    window.location.href = "https://play.google.com/store/apps/details?id=com.getspellboundbooks.spellbound&hl=en_US&gl=US";
  }
  
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "https://apps.apple.com/us/app/spellbound-ar/id1033984853";
  }
  
  // Base case
  else window.location.href = "https://apps.apple.com/us/app/spellbound-ar/id1033984853";
}

function redirectToVibeARcadeAppStore()
{
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    window.location.href = "https://play.google.com/store/apps/details?id=com.spellbound.vibearcade";
  }
  
  // Android
  else if (/android/i.test(userAgent)) {
    window.location.href = "https://play.google.com/store/apps/details?id=com.spellbound.vibearcade";
  }
  
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "https://apps.apple.com/nz/app/vibe-arcade/id6475691258";
  }
  
  // Base case
  else window.location.href = "https://apps.apple.com/nz/app/vibe-arcade/id6475691258";
}
