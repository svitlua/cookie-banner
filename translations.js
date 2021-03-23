const getBannerHeaderText = (language) =>{
    switch (language) {
        case 'ES':
            return 'Este sitio web utiliza cookies'
        case 'DE':
            return 'Diese Website verwendet Cookies'
        case 'EN':
        default:
            return 'This website uses cookies'
      }
}

const getBannerInfoText = (language) =>{
    switch (language) {
        case 'ES':
            return `Para ofrecerle el servicio más eficaz posible, nuestro sitio utiliza las cookies necesarias y tecnologías similares. Con su permiso, utilizamos cookies estadísticas para probar y optimizar el sitio web. Si acepta cookies de marketing, compartimos información con nuestros socios para redes sociales, publicidad y análisis. Háganos saber debajo de qué cookies podemos utilizar. `
        case 'DE':
            return `Um Ihnen einen möglichst effektiven Service bieten zu können, verwendet unsere Website die erforderlichen Cookies und ähnliche Technologien. Mit Ihrer Erlaubnis verwenden wir Statistik-Cookies, um die Website zu testen und zu optimieren. Wenn Sie Marketingcookies akzeptieren, teilen wir Informationen mit unseren Partnern für soziale Medien, Werbung und Analyse. Bitte teilen Sie uns mit, unter welchen Cookies wir arbeiten können.`
        case 'EN':
        default:
            return `In order to offer you the most effective service possible, our site makes use of necessary cookies and similar technologies. With your permission we use statistic cookies to test and optimize the website. If you accept marketingcookies we share information with our partners for social media, advertising and analysis. Please let us know underneath which cookies we can use.`
      }
}

const getBannerSettingsBtnLabel = (language) =>{
    switch (language) {
        case 'ES':
            return 'Ajustes'
        case 'DE':
            return 'Einstellungen'
        case 'EN':
        default:
            return 'Settings'
      }
}

const getBannerAcceptAllBtnLabel = (language) =>{
    switch (language) {
        case 'ES':
            return 'Aceptar todo'
        case 'DE':
            return 'Akzeptiere alle'
        case 'EN':
        default:
            return 'Accept All'
      }
}