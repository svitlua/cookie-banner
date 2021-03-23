function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function cookieConsent() {
    if (!getCookie('allowCookies')) {
        $('.toast').toast('show')
    }
}

$('#btnDeny').click(()=>{
    eraseCookie('allowCookies')
    $('.toast').toast('hide')
})

$('#btnAccept').click(()=>{
    setCookie('allowCookies','1',7)
    $('.toast').toast('hide')
})

$('#btnAccept').click(()=>{
    setCookie('allowCookies','1',7)
    $('.toast').toast('hide')
})

// load
cookieConsent()

// for demo / testing only
$('#btnReset').click(()=>{
    // clear cookie to show toast after acceptance
    eraseCookie('allowCookies')
    $('.toast').toast('show')
})


function launchFB() {
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', '159702201342042');
  fbq('set','agent','tmgoogletagmanager', '159702201342042');
  fbq('track', "PageView");
}

function launchGoogleAnalytics() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-00000000-1', 'auto');
    ga('send', 'pageview');
}

// Loading code given by Google Analytics.
// <!-- Start of Google Analytics -->
// <script>
//   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//   })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 
//   ga('create', 'UA-00000000-1', 'auto');
//   ga('send', 'pageview');
 
// </script>
// <!-- End of Google Analytics --> 

// <!-- Facebook Pixel Code -->
// <script>
// !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
// n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
// document,'script','https://connect.facebook.net/en_US/fbevents.js');

// fbq('init', '159702201342042');
// fbq('set','agent','tmgoogletagmanager', '159702201342042');
// fbq('track', "PageView");
// </script>
// <noscript><img height="1" width="1" style="display:none"
// src="https://www.facebook.com/tr?id=159702201342042&ev=PageView&noscript=1"
// /></noscript>
// <!-- End Facebook Pixel Code -->