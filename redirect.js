const SpellBoundAR_iOS = "https://apps.apple.com/us/app/spellbound-ar/id1033984853";
const SpellBoundAR_Android = "https://play.google.com/store/apps/details?id=com.getspellboundbooks.spellbound&hl=en_US&gl=US";
const VibeARcade_iOS = "https://apps.apple.com/nz/app/vibe-arcade/id6475691258";
const VibeARcade_Android = "https://play.google.com/store/apps/details?id=com.spellbound.vibearcade";
const HHGametime_iOS = "https://apps.apple.com/us/app/spellbound-ar/id1033984853";
const HHGametime_Android = "https://play.google.com/store/apps/details?id=com.getspellboundbooks.spellbound&hl=en_US&gl=US";

function redirectToSpellBoundAppStore()
{
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    window.location.href = SpellBoundAR_Android;
  }
  // Android
  else if (/android/i.test(userAgent)) {
    window.location.href = SpellBoundAR_Android;
  }
  else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = SpellBoundAR_iOS;
  }
  else window.location.href = SpellBoundAR_iOS;
}

function redirectToVibeARcadeAppStore()
{
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if (/windows phone/i.test(userAgent)) {
    window.location.href = VibeARcade_Android;
  }
  else if (/android/i.test(userAgent)) {
    window.location.href = VibeARcade_Android;
  }
  else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = VibeARcade_iOS;
  }
  else window.location.href = VibeARcade_iOS;
}

function redirectToHHGametimeAppStore()
{
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  if (/windows phone/i.test(userAgent)) {
    window.location.href = HHGametime_Android;
  }
  else if (/android/i.test(userAgent)) {
    window.location.href = HHGametime_Android;
  }
  else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = HHGametime_iOS;
  }
  else window.location.href = HHGametime_iOS;
}
