function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}


const bannerTemplate = (language) => {
  return `
<div class="banner-container" id="bannerContainer">
  <span class="header-text">${getBannerHeaderText(language)}</span>
  <p>${getBannerInfoText(language)}
  </p>
  <div>
    <button id="settingsBtn" class="button">${getBannerSettingsBtnLabel(language)}</button>
    <button id="acceptAllBtn" class="button">${getBannerAcceptAllBtnLabel(language)}</button>
  </div>
</div>
`;
};

function checkIfConsentCookieIsDismissed() {
  const isCookieSet = getCookie('cookieconsent_dismissed');
  console.log('isCookieSet', isCookieSet);
  // Add bannerTemplate to site
  const bannerNode = document.createElement('div');
  bannerNode.innerHTML = bannerTemplate('DE');
  document.getElementsByTagName('body')[0].append(bannerNode);
  if (isCookieSet !== 'yes') {
    const bannerContainer = document.getElementById('bannerContainer');
    debugger;
    bannerContainer.style.display = 'block';
  }
}

checkIfConsentCookieIsDismissed();

// Get the modal
var settingsModal = document.getElementById('settingsModal');

// Get the button that opens the modal
var settingsBtn = document.getElementById('settingsBtn');

var saveSettingsBtn = document.getElementById('saveSettingsBtn');

// Get the <span> element that closes the modal
var span = document.getElementById('closeIcon');

// When the user clicks the button, open the modal
settingsBtn.onclick = function () {
  settingsModal.style.display = 'block';
};

function closeModal() {
  settingsModal.style.display = 'none';
}

function hideBanner() {
  bannerContainer.style.display = 'none';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  closeModal();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == settingsModal) {
    closeModal();
  }
};

function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

saveSettingsBtn.onclick = function () {
  var isStatisticChecked = document.getElementById('statisticCheck').checked;
  var isMarketingChecked = document.getElementById('marketingCheck').checked;
  console.log('statisticCheck:', isStatisticChecked);
  console.log('marketingCheck:', isMarketingChecked);
  setCookie('cookieconsent_dismissed', 'yes', 10);
  closeModal();
  hideBanner();
};