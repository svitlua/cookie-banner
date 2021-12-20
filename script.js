(function () {
  // BANNER TEMPLATE
  const bannerTemplate = () => `
<div class="banner-container" id="cookieBannerContainer">
  <span class="header-text">${i18next.t('banner_header')}</span>
  <p>${i18next.t('banner_info_text')}
  </p>
  <div>
    <button id="settingsBtn" class="button">${i18next.t('settings')}</button>
    <button id="acceptAllBtn" class="button">${i18next.t('accept_all')}</button>
  </div>
</div>
`;

// SETTINGS TEMPLATE
  const settingsTemplate = () => `<div id="settingsModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="modal-header-text">Cookie Settings Modal</span>
        <span id="closeIcon" class="close">&times;</span>
      </div>
      <div class="modal-body">
        <p>${i18next.t('settings_info')}</p>
        <div>
          <input type="checkbox" id="necessaryCheck" name="necessaryCheck" checked disabled />
          <label for="necessaryCheck">${i18next.t('necessary')}</label>
        </div>
        <p>
        ${i18next.t('necessary_description')}
        </p>
        <div>
          <input type="checkbox" id="googleAnalyticsCheck" name="googleAnalyticsCheck" />
          <label for="googleAnalyticsCheck">${i18next.t('googleAnalytics')}</label>
        </div>
        <p>
        ${i18next.t('googleAnalytics_description')}
        </p>
        <div>
          <input type="checkbox" id="fbPixelCheck" name="fbPixelCheck" />
          <label for="fbPixelCheck">${i18next.t('otherCookie')}</label>
        </div>
        <p>
        ${i18next.t('otherCookie_description')}
        </p>
        <div class="button-container">
          <button class="button" id="saveSettingsBtn">${i18next.t('save')}</button>
        </div>
      </div>
    </div>
  </div>`;

  // GOOGLE ANALYTICS COOKIE FUNCTION
  function setGoogleAnalyticsCookies() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-335PYRBTD7');
    gtag("config", 'UA-192857985-1');
  }

  // FB PIXEL COOKIE FUNCTION
  function setFacebookPixelCookies() {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '498855108143058');
    fbq('track', 'PageView');
  }

  // GET COOKIE DATA FUNCTION
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

  // SET COOKIE DATA FUNCTION
  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  // ADD bannerNode and settingsNode to DOM
  const bannerNode = document.createElement('div');
  const settingsNode = document.createElement('div');

  // INITIATE TRANSLATION SERVICE
  i18next.init(
    {
      lng: 'en',
      debug: true,
      resources: {
        en: {
          translation: {
            accept_all: 'Accept All',
            settings: 'Settings',
            save: 'Save',
            banner_header: 'This website uses cookies',
            banner_info_text:
              'In order to offer you the most effective service possible, our site makes use of necessary cookies and similar technologies. With your permission we use statistic cookies to test and optimize the website. If you accept marketingcookies we share information with our partners for social media, advertising and analysis. Please let us know underneath which cookies we can use.',
            settings_info:
              'This site uses different types of cookies. Some cookies are placed by third party service that appear on our pages.',
            necessary: 'Necessary',
            necessary_description:
              'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.',
            googleAnalytics: 'Google Analytics',
            googleAnalytics_description:
              'Google Analytics cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.',
            otherCookie: 'Facebook Pixel',
            otherCookie_description:
              'Facebook Pixel cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.',
          },
        },
        de: {
          translation: {
            accept_all: 'Akzeptiere alle',
            settings: 'Einstellungen',
            save: 'Speichern',
            banner_header: 'Diese Website verwendet Cookies',
            banner_info_text:
              'Um Ihnen einen möglichst effektiven Service bieten zu können, verwendet unsere Website die erforderlichen Cookies und ähnliche Technologien. Mit Ihrer Erlaubnis verwenden wir Statistik-Cookies, um die Website zu testen und zu optimieren. Wenn Sie Marketingcookies akzeptieren, teilen wir Informationen mit unseren Partnern für soziale Medien, Werbung und Analyse. Bitte teilen Sie uns mit, unter welchen Cookies wir arbeiten können.',
            settings_info:
              'Diese Seite verwendet verschiedene Arten von Cookies. Einige Cookies werden von Drittanbietern platziert, die auf unseren Seiten erscheinen.',
            necessary: 'Notwendig',
            necessary_description:
              'Notwendige Cookies helfen dabei, eine Website nutzbar zu machen, indem sie grundlegende Funktionen wie die Seitennavigation und den Zugriff auf sichere Bereiche der Website ermöglichen. Die Website kann ohne diese Cookies nicht ordnungsgemäß funktionieren.',
            googleAnalytics: 'Google Analytics',
            googleAnalytics_description:
              'Google Analytics-Cookies helfen Website-Eigentümern zu verstehen, wie Besucher mit Websites interagieren, indem sie Informationen anonym sammeln und melden',
            otherCookie: 'Facebook Pixel',
            otherCookie_description:
              'Facebook Pixel Cookies helfen Websitebesitzern zu verstehen, wie Besucher mit Websites interagieren, indem sie Informationen anonym sammeln und melden.',
          },
        },
        es: {
          translation: {
            accept_all: 'Aceptar todo',
            settings: 'Ajustes',
            save: 'Ahorrar',
            banner_header: 'Este sitio web utiliza cookies',
            banner_info_text:
              'Para ofrecerle el servicio más eficaz posible, nuestro sitio utiliza las cookies necesarias y tecnologías similares. Con su permiso, utilizamos cookies estadísticas para probar y optimizar el sitio web. Si acepta cookies de marketing, compartimos información con nuestros socios para redes sociales, publicidad y análisis. Háganos saber debajo de qué cookies podemos utilizar.',
            settings_info:
              'Este sitio utiliza diferentes tipos de cookies. Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas.',
            necessary: 'Necesario',
            necessary_description:
              'Las cookies necesarias ayudan a que un sitio web sea utilizable al habilitar funciones básicas como la navegación de la página y el acceso a áreas seguras del sitio web. El sitio web no puede funcionar correctamente sin estas cookies.',
            googleAnalytics: 'Google Analytics',
            googleAnalytics_description:
              'Las cookies de Google Analytics ayudan a los propietarios de sitios web a comprender cómo los visitantes interactúan con los sitios web al recopilar y reportar información de forma anónima.',
            otherCookie: 'Facebook Pixel',
            otherCookie_description:
              'Las cookies de Facebook Pixel ayudan a los propietarios de sitios web a comprender cómo los visitantes interactúan con los sitios web al recopilar y reportar información de forma anónima.',
          },
        },
      },
    },
    function (err, t) {
      if (err) return console.log('something went wrong loading', err);
      // init set content
      updateContent();
    },
  );


  // UPDATE CONTENT WHEN LANGUAGE IS CHANGES
  i18next.on('languageChanged', () => {
    updateContent();
  });

  // MAIN FUNCTIONALITY
  function updateContent() {
    const isCookieSet = getCookie('cookieconsent_dismissed');
    if (isCookieSet !== 'yes') {
      bannerNode.innerHTML = bannerTemplate();
      document.getElementsByTagName('body')[0].append(bannerNode);
      const bannerContainer = document.getElementById('cookieBannerContainer');
      bannerContainer.style.display = 'block';
      settingsNode.innerHTML = settingsTemplate();
      document.getElementsByTagName('body')[0].append(settingsNode);

      const settingsModal = document.getElementById('settingsModal');
      const settingsBtn = document.getElementById('settingsBtn');
      const acceptAllBtn = document.getElementById('acceptAllBtn');
      const saveSettingsBtn = document.getElementById('saveSettingsBtn');
      const closeSettingsIcon = document.getElementById('closeIcon');

      settingsBtn.onclick = function () {
        settingsModal.style.display = 'block';
      };

      closeSettingsIcon.onclick = function () {
        closeModal();
      };

      window.onclick = function (event) {
        if (event.target == settingsModal) {
          closeModal();
        }
      };

      function closeModal() {
        settingsModal.style.display = 'none';
      }

      function hideBanner() {
        bannerContainer.style.display = 'none';
      }

      saveSettingsBtn.onclick = function () {
        var isGoogleAnalyticsCheck = document.getElementById('googleAnalyticsCheck').checked;
        var isFbPixelCheck = document.getElementById('fbPixelCheck').checked;
        setCookie('cookieconsent_dismissed', 'yes', 720); // set cookieconsent_dismissed for 2 years(aprox.720 days)
        if (isGoogleAnalyticsCheck) setGoogleAnalyticsCookies();
        if (isFbPixelCheck) setFacebookPixelCookies();
        closeModal();
        hideBanner();
      };

      acceptAllBtn.onclick = function () {
        setCookie('cookieconsent_dismissed', 'yes', 720); // set cookieconsent_dismissed for 2 years(aprox.720 days)
        setGoogleAnalyticsCookies();
        setFacebookPixelCookies();
        closeModal();
        hideBanner();
      };
    }
  }
})();
