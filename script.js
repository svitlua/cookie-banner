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
<div class="banner-container" id="cookieBannerContainer">
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

const cookieModalTemplate = (language) =>{
    return `<div id="settingsModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="modal-header-text">Cookie Settings Modal</span>
        <span id="closeIcon" class="close">&times;</span>
      </div>
      <div class="modal-body">
        <p>
          This site uses different types of cookies. Some cookies are placed by third party services
          that appear on our pages.
        </p>
        <div>
          <input type="checkbox" id="necessaryCheck" name="necessaryCheck" checked disabled />
          <label for="necessaryCheck">Necessary</label>
        </div>
        <p>
          Necessary cookies help make a website usable by enabling basic functions like page
          navigation and access to secure areas of the website. The website cannot function properly
          without these cookies.
        </p>
        <div>
          <input type="checkbox" id="statisticCheck" name="statisticCheck" checked />
          <label for="statisticCheck">Statistic</label>
        </div>
        <p>
          Statistic cookies help website owners to understand how visitors interact with websites by
          collecting and reporting information anonymously.
        </p>
        <div>
          <input type="checkbox" id="marketingCheck" name="marketingCheck" checked />
          <label for="marketingCheck">Marketing</label>
        </div>
        <p>
          Marketing cookies are used to track visitors across websites. The intention is to display
          ads that are relevant and engaging for the individual user and thereby more valuable for
          publishers and third party advertisers.
        </p>
        <div class="button-container">
          <button class="button" id="saveSettingsBtn">Save</button>
        </div>
      </div>
    </div>
  </div>`
}

function checkIfConsentCookieIsDismissed() {
  const isCookieSet = getCookie('cookieconsent_dismissed');
  console.log('isCookieSet', isCookieSet);
  // Add cookieBannerTemplate and cookieModalTemplate to site
  const cookieBannerNode = document.createElement('div');
  cookieBannerNode.innerHTML = bannerTemplate('DE');
  const cookieModalNode = document.createElement('div');
  cookieModalNode.innerHTML = cookieModalTemplate('DE');
  document.getElementsByTagName('body')[0].append(cookieBannerNode);
  document.getElementsByTagName('body')[0].append(cookieModalNode);
  if (isCookieSet !== 'yes') {
    const cookieBannerContainer = document.getElementById('cookieBannerContainer');
    cookieBannerContainer.style.display = 'block';
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
  cookieBannerContainer.style.display = 'none';
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